module.exports = {
  lintOnSave: false,
  pages: {
    index: 'src/View/main.js',
  },
  configureWebpack: (config) => {
    console.log(JSON.stringify(config, null, 2));
  },
};
