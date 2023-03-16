const proxy = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        // 遇见/aip1前缀的请求，就会触发该代理配置
        proxy.createProxyMiddleware("/api1", {
            // 请求发给谁
            target: "http://localhost:5000",
            // 修改的响应头中的Host值
            changeOrigin: true,
            // 重写请求路径
            pathRewrite: { "^/api1": "" },
        }),
        proxy.createProxyMiddleware("/api2", {
            target: "http://localhost:5001",
            changeOrigin: true,
            pathRewrite: { "^/api2": "" },
        }),
    )
}