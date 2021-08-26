const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#5E5A5A",
              "@btn-disable-color": "#fff",
              "@btn-disable-bg": "#868686",
              "@btn-disable-border": "#868686",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
