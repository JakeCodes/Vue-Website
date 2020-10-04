module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  transpileDependencies: ["vuetify"],
};
