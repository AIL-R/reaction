const path = require('path'); // 需添加 path 模块引用

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // 修改公共路径
      webpackConfig.output.publicPath = '/reaction/';
      
      return webpackConfig;
    }
  }
};
