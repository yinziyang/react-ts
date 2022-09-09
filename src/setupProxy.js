const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/wdapi',
        createProxyMiddleware({
            target: 'http://10.16.20.11:8886',
            changeOrigin: true,
            headers: { 'X-WD': 1 },
            pathRewrite: {
                '^/wdapi': '/api',
            },
        })
    );
};