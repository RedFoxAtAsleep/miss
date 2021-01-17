module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      if (process.env.BUILD_FOR_GHPAGE === 'on'){
        return {
          publicPath: '/miss/',
          outputDir: 'dist',  // 相对于根目录
        }
      }
      return {}
    } else {
      // 为开发环境修改配置...
      return {}
    }
  }
}
