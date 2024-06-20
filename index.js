/** @type {import("eslint").Linter.Config} */

const config = {
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  extends: [require.resolve("./recommended")],
  rules: {
    // TODO: Fix all the errors so we can turn this rule on :)
    "no-async-promise-executor": "off",
  },
  overrides: [
    {
      files: "**/*.+(ts|tsx)",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
      },
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
    },
  ],
};

module.exports = config;
