const config = {
  'GHPAGE_CUSTOM_DOMAIN':{
    publicPath: '/',
    outputDir: 'dist_for_ghpage',
    //assetsDir:'assets',//静态资源目录(js,css,img,fonts)这些文件都可以写里面
    lintOnSave:false,//是否开启eslint保存检测 ,它的有效值为 true || false || 'error'\
  },
  'GHPAGE':{
    publicPath: '/miss/',
    outputDir: 'dist_for_ghpage',
    //assetsDir:'assets',//静态资源目录(js,css,img,fonts)这些文件都可以写里面
    lintOnSave:false,//是否开启eslint保存检测 ,它的有效值为 true || false || 'error'\
  },
  'DJANGO':{
    // publicPath: '',
    outputDir: 'dist_for_django',  // 相对于根目录
    indexPath: 'templates/index.html',  // 相对于outputDir
    assetsDir: 'static',  // 相对于outputDir，js、css、img、fonts
    lintOnSave:false,
  },
  'HTMLPK':{
    publicPath: './',
    outputDir: 'dist_for_htmlpk',
    lintOnSave:false,
  }
}  // GHPAGE DJANGO HTMLPK
module.exports = config[process.env.BUILD_FOR]
