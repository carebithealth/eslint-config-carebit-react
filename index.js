/** @type {import("eslint").Linter.Config} */

const config = {
  plugins: ["jsdoc", "react-refresh"],
  extends: ["react-app"],
  rules: {
    // ! I'd like to this rule on but need time to fix the warnings.
    "no-async-promise-executor": "off",
  },
  overrides: [require.resolve("./typescript")],
};

module.exports = config;
