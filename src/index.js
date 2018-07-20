import Koa from "koa";
import mount from "koa-mount";
import serve from "koa-static";
import middleware from "./middleware";

import api from "./api";

const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || 4000;
const app = new Koa();

app.use(middleware());
app.use(mount(api));
app.use(serve(`${process.cwd()}/docs`));
app.use(mount("/uploads", serve(`${process.cwd()}/uploads`)));

app.listen(port, () => {
  console.log(`App started on port ${port} with environment ${env}`);
});

export default app;


