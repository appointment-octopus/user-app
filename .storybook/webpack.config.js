const { resolve } = require("path");
const { withUnimodules } = require("@expo/webpack-config/addons");

module.exports = ({ config }) => {
  // Add SVGR Loader
  // ========================================================
  // Remove svg rules from existing webpack rule
  const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));

  const assetLoader = {
    loader: assetRule.loader,
    options: assetRule.options || assetRule.query,
  };

  config.module.rules.unshift({
    test: /\.svg$/,
    use: ['@svgr/webpack', assetLoader],
  });

  return withUnimodules(config, { projectRoot: resolve(__dirname, "../") });
};
