// import px2rem from 'postcss-plugin-px2rem';
// import path from 'path';

export default {
  hash: true,
  history: { type: 'hash' },
  publicPath: '/s/h5approvalflow/',
  npmClient: 'yarn',
  // alias: {
  //   '@': path.resolve(__dirname, 'src'),
  //   utils: path.resolve(__dirname, 'src/utils'),
  //   layout: path.resolve(__dirname, 'src/layout'),
  //   component: path.resolve(__dirname, 'src/component'),
  //   assets: path.resolve(__dirname, 'assets'),
  // },
  extraPostCSSPlugins: [
    // px2rem({
    //   rootValue: 18.75, // 兼容 ant mobile
    //   propBlackList: [
    //     'border',
    //     'border-top',
    //     'border-left',
    //     'border-right',
    //     'border-bottom',
    //   ], //这些属性不需要转换
    // }),
  ],
  proxy: {},
};
