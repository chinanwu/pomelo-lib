module.exports = {
  css: {
    //Allows for actual css to be exported with the components
    extract: false
  },
  chainWebpack: config => {
    // Allows me to use the index.html within demo
    config.plugin("html").tap(args => {
      args[0].template = "./demo/public/index.html";
      return args;
    });
  },
  publicPath: ""
};
