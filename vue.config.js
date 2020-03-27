const path = require('path');
module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  devServer: {
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    open: true,
    proxy: {
      '/rest': {
        target: 'http://mtxc.xyz:8082',
        changeOrigin: true,
        crossOrigin: true,
        ws: true
      }
    }
  },
};

