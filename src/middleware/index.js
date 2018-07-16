import compose from "koa-compose";
import convert from "koa-convert";
import helmet from "koa-helmet";
import cors from "koa-cors";
import error from "koa-json-error";
import handleError from "./handle-error";
import bodyParser from "koa-bodyparser";

export default function() {
  return compose([
    helmet(),
    convert(cors()),
    convert(bodyParser()),
    handleError(),
    error()
]);
}  