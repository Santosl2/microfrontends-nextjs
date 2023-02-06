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
          name: "consumer",
          remotes: {
            header: `header@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",

          shared: {},
        })
      );
    }

    return config;
  },
};
