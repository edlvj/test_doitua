import bcrypt from "bcrypt";
import models from "../../../db";
import asyncBusboy from "async-busboy";
import { validateFormWithFile, validateForm } from "./helpers";
import { saveFile } from "./../../../services/fileupload";

export const signUp = async (ctx, next) => {
  let { files, fields } = await asyncBusboy(ctx.req);

  const errors = validateFormWithFile(files, fields);
  if(errors.length > 0)
    ctx.throw(400, errors.join(', '));
  
  let avatar = saveFile(files[0]);
  fields.password = await bcrypt.hash(fields.password, 5);
  fields.avatar = avatar.path;

  let user = await models.user.findOne({
    where: {
      email: fields.email
    }
  });

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

  const errors = validateForm(fields);
  if(errors.length > 0)
    ctx.throw(400, errors.join(', '));

  const user = await models.user.findOne({
    where: {
      email: fields.email
    }
  });

  if(!user) {
    ctx.throw(400, 'Email or Password Wrong');
  }
  
  const checkPassword = await bcrypt.compare(fields.password, user.password);
  if(!checkPassword) {
    ctx.throw(400, 'Email or Password Wrong');
  }  
  ctx.body = user;
};

