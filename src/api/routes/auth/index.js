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
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6I",
 *          "user": {
 *              "id": "1e8d2ec0-643f-4575-810d-5bea741f058d",
 *              "email": "test2@test.com",
 *              "password": "$2b$05$H7dDA.0msMSEuKeoHVRtF.doqOuQzvvk0CPED1RKt3NOHPgW/gPay",
 *              "avatarUrl": "http://localhost:4000/uploads/1a44fbc8-6c29-4adf-bdec-13875874c08e.jpg",
 *              "updatedAt": "2018-07-18T19:27:03.090Z",
 *              "createdAt": "2018-07-18T19:27:03.090Z"
 *         }
 *     }
 *        
 *        
 *     
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
 *           "id": "ad7b3dc5-0bf4-4f5f-ab3a-a20dccd9fcb0",
 *           "email": "test@test.com",
 *           "password": "$2b$05$HFETMO2xfbm0ehElWf3PEOvPWANssNwMShz2WC5DpvuHUdIydtsse",
 *           "avatarUrl": "/home/ed/projects/test_doitua/uploads/1531940659683-f659f219a82d (1).jpg",
 *           "createdAt": "2018-07-18T19:04:19.743Z",
 *           "updatedAt": "2018-07-18T19:04:19.743Z"
 *      }
 *
 */

router.post(
  '/sign_up',
  handlers.signUp);

export default router;