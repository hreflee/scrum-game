module.exports = {
  lintOnSave: false,
  pages: {
    index: 'src/View/main.js',
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/scrum-game/' : '/',
};
