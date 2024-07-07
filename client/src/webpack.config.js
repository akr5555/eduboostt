const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  // Other Webpack configurations...

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
