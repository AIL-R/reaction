module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // 修改公共路径，确保静态资源路径为 /reaction/
      webpackConfig.output.publicPath = '/reaction/';

      return webpackConfig;
    }
  }
};
