import Router from "koa-router";
import * as handlers from "./handlers";

const router = new Router({
  prefix: "/auth"
});

/**
 * @api {get} /auth/sign_in Sign ui for user
 * @apiVersion 1.0.0
 * @apiName GetCategories
 * @apiGroup Category
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": "45c6c461-32f7-4685-aef8-8a5357663f1d",
 *      }
 *
 */

router.get("/sign_in", handlers.signIn);

/**
 * @api {get} /auth/sign_up Sign up for user
 * @apiVersion 1.0.0
 * @apiName GetCategories
 * @apiGroup Category
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": "45c6c461-32f7-4685-aef8-8a5357663f1d",
 *      }
 *
 */

router.get("/sign_up", handlers.signUp);

export default router;