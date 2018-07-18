import Router from "koa-router";
import * as handlers from "./handlers";

const router = new Router({
  prefix: "/auth"
});

/**
 * @api {post} /auth/sign_in Sign up for user
 * @apiVersion 1.0.0
 * @apiName User Sign Up
 * @apiGroup Auth
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "token": "hweiurt3478fgerfghr8hf738" 
 *        "id": "45c6c461-32f7-4685-aef8-8a5357663f1d",
 *     }
 *
 */

router.post("/sign_in",
  handlers.signIn);

/**
 * @api {post} /auth/sign_up Sign up for user
 * @apiVersion 1.0.0
 * @apiName User Sign In
 * @apiGroup Auth
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": "45c6c461-32f7-4685-aef8-8a5357663f1d",
 *      }
 *
 */

router.post(
  '/sign_up',
  handlers.signUp);

export default router;