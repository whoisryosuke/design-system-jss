const path = require("path");

module.exports = {
  // Sets up Styleguidist with our Webpack setup
  webpackConfig: require("./webpack.config.js"),

  // Override Styleguidist doc components
  styleguideComponents: {
    Wrapper: path.join(__dirname, ".styleguidist/components/Wrapper")
  },

  // Files to ignore from docs
  ignore: ["**/*.story.js", "**/*.test.js"]
};
