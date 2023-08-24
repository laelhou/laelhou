const path = require('path');
const package = require('./package.json');
module.exports = {
  base: `/${package.name}/`, // 子应用base路径， 默认为包名
  outputPath: './dist', // 打包文件输出地址；配置值时，基于项目根目录，默认为：'./libDist'
  themeConfig: {
    root: './', // 设置组件文件存放根目录，配置值时，基于项目根目录（也就是项目根目录）默认为：./src/components
    navs: [
      {
        mdx: './README.md',
      },
    ],
  },
  projectType:'react',
  webpackConfig: (config, options) => {
    config.resolve.alias = {
      '@/utils/request': options.requestPath, // 用脚手架的requer方法，打包时会忽略此文件
      '@': path.join(__dirname, 'src'),
      [package.name]: path.join(__dirname),
    };
    config.devServer.proxy = {
      '/api': {
        target: 'http://api.tf56.lo/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    };
    return config;
  },
  // 微信推送哪些组件,当有好几个组件在一起的时候需要配置
  // wx:[{
  //   pkg:'tf-form 配置化表单',
  //   url:'http://magic.tf56.lo/tf-yuanqu-components/form',
  // }] 
};
