module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // 修改公共路径
      webpackConfig.output.publicPath = '/reaction/';
      
      // 可选：添加路径别名（示例）
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '@assets': path.resolve(__dirname, 'public/static')
      };
      
      return webpackConfig;
    }
  }
};
