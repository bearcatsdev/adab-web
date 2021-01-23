module.exports = {
    devServer: {
      proxy: {
        "/api/": {
          target: "https://adab.bearcats.dev/",
          logLevel: "debug"
        }
      }
    }
  };