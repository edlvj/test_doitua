import compose from "koa-compose";
import passport from "./passport";
import models from "../../db";
import Config from "../../config";

export const jwtAuth = (ctx, next) => {
  // return passport.authenticate(
  //   "jwt",
  //   { session: false },
  //   async (err, user, info) => {
  //     if (err) {
  //       ctx.throw(err);
  //     } else if (info && info.name === "TokenExpiredError") {
  //       const error = new Error("token expires");
  //       error.status = 426;
  //       error.name = "TokenExpiredError";
  //       ctx.throw(error);
  //     } else if (!user) {
  //       ctx.throw(401);
  //     } else {
  //       ctx.state.user = user;
  //       await next();
  //     }
  //   }
  // )(ctx, next);
};
