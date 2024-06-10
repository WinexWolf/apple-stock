import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/financials",
    createProxyMiddleware({
      target: "http://127.0.0.1:8000",
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log("Proxying request:", req.url);
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log("Received response from target:", proxyRes.statusCode);
      },
    })
  );
};
