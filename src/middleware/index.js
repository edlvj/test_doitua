import compose from "koa-compose";
import convert from "koa-convert";
import helmet from "koa-helmet";
import error from "koa-json-error";
import handleError from "./handle-error";

export default function() {
  return compose([
    helmet(),
    convert(
      cors()
    ),
    handleError(),
    error()
]);
}  