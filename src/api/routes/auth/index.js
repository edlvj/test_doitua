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
 * @apiHeader {String} Authorization Users unique accessToken
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": "45c6c461-32f7-4685-aef8-8a5357663f1d",
 *         "name": "Second category",
 *         "description": "",
 *         "color": "#f31d1d",
 *         "image": null,
 *      }
 *
 */

router.get("/sign_in", handlers.signIn);

/**
 * @api {get} /auth/sign_in Sign ui for user
 * @apiVersion 1.0.0
 * @apiName GetCategories
 * @apiGroup Category
 * @apiHeader {String} Authorization Users unique accessToken
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": "45c6c461-32f7-4685-aef8-8a5357663f1d",
 *         "name": "Second category",
 *         "description": "",
 *         "color": "#f31d1d",
 *         "image": null,
 *      }
 *
 */

router.get("/sign_up", handlers.signUp);

/**
 * @api {get} /auth/sign_in Sign ui for user
 * @apiVersion 1.0.0
 * @apiName GetCategories
 * @apiGroup Category
 * @apiHeader {String} Authorization Users unique accessToken
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": "45c6c461-32f7-4685-aef8-8a5357663f1d",
 *         "name": "Second category",
 *         "description": "",
 *         "color": "#f31d1d",
 *         "image": null,
 *      }
 *
 * @apiUse UnauthorizedError
 * @apiUse TokenExpiredError
 */

router.delete("/sign_out", handlers.signOut);

export default router;