module.exports = {
  lintOnSave: false
}

module.exports = {
  publicPath: '/YourRepoName/'
}
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      return {
        publicPath: '/miss/'
      }
    } else {
      // 为开发环境修改配置...

    }
  }
}
