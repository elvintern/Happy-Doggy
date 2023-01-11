const path = require('path')

module.exports = {
  paths: function (paths) {
    paths.appIndexHtml = path.resolve(__dirname, './index.html')
    paths.appIndexJs = path.resolve(__dirname, './client/index.jsx')
    paths.appSrc = path.resolve(__dirname, './client')
    return paths
  },
}
