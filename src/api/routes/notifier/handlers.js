export const sendNotify = async ctx => {
  const id = ctx.params.id;
  ctx.body = 'weather sender';
};