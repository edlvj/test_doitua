import bcrypt from "bcrypt";
import models from "../../../db";
import asyncBusboy from "async-busboy";
import { validateFields } from "./helpers";
import { saveFile, validateFile } from "./../../../services/fileupload";

export const signUp = async (ctx, next) => {
  let { files, fields } = await asyncBusboy(ctx.req);
  
  const fileValidations = validateFile(files[0]);
  const fieldsValidations = validateFields(fields);

  const errors = [...fileValidations, ...fieldsValidations];

  console.log(errors);

  if(errors.length > 0)
    ctx.throw(400, errors.join(', '));
  
  const avatar = saveFile(files[0]);

  fields.password = await bcrypt.hash(fields.password, 5);
  fields.avatarUrl = avatar.path;

  console.log(fields);

  const user = await models.user.findOne({
    where: {
      email: fields.email
    }
  });

  console.log(user);

  if(!user) {
    ctx.body = {
      token: user.getAccessToken(),
      user: await models.user.create(fields)
    };
    await next();
  } else {
    ctx.throw(409);
  }
};

export const signIn = async ctx => {
  const fields = ctx.request.body;

  const errors = validateFieds(fields);
  console.log(errors);

  if(errors.length > 0)
    ctx.throw(400, errors.join(', '));

  console.log(fields);

  const user = await models.user.findOne({
    where: {
      email: fields.email
    }
  });

  console.log(user);

  if(!user) {
    ctx.throw(400, 'Email or Password Wrong');
  }
  
  const checkPassword = await bcrypt.compare(fields.password, user.password);

  if(!checkPassword) {
    ctx.throw(400, 'Email or Password Wrong');
  }  
  ctx.body = user;
};

