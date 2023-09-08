const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://112.222.157.156:5003/",
      changeOrigin: true,
    }),
  );
};
