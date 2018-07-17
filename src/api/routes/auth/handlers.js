import bcrypt from "bcrypt";
import models from "../../../db";

export const signUp = async (ctx, next) => {
  let body = ctx.request.body;
  body.password = await bcrypt.hash(body.password, 5);

  let user = await models.user.findOne({
    where: {
      email: body.email
    }
  });

  if(!user) {
    user = await models.user.create(body);
    ctx.body = {
      token: user.getAccessToken(),
      user: user
    };
    await next();
  } else {
    ctx.throw(409);
  }
};

export const signIn = async ctx => {
  ctx.body = 'it is sign in';
};