/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { webpack } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: "header",

          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./component/Header": "./src/components/Header.tsx",
          },
          shared: {},
        })
      );
    }

    return config;
  },
};
