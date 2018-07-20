import Router from "koa-router";
import * as handlers from "./handlers";
import validate from "koa-req-validator";

const router = new Router({
  prefix: "/notifier"
});

/**
 * @api {get} /api/notifier/sendNotify?logins=edlvj&text=hello Send notify to github users
 * @apiVersion 1.0.0
 * @apiName sendNotify
 * @apiGroup Notifier
 * 
 * 
 * @apiParam {String} logins Notifier logins 
 * @apiParam {String} text Notifier text
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *         "status": "true",
 *         "message": "Ok"
 *     }]
 *
 */

router.get(
  '/sendNotify', 
  validate({
    logins: ["require", "logins is require"],
    text: ["require", "text is require"]
  }),
  handlers.sendNotify
);

export default router;