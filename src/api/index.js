import Koa from "koa";
import Router from "koa-router";
import * as routes from "./routes";

const app = new Koa();

const router = new Router({
  prefix: "/api"
});

Object.keys(routes).forEach(name => {
  const route = routes[name];
  router.use(route.routes());
});

app.use(router.routes());

export default app;