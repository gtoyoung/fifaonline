const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/latest",
    createProxyMiddleware({
      target: "https://static.api.nexon.co.kr/fifaonline4",
      changeOrigin: true,
    })
  );
};
