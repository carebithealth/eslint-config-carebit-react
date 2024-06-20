// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

// "eslint-plugin-flowtype": "^8.0.3",
// "eslint-plugin-import": "^2.25.3",
// "eslint-plugin-jest": "^28.6.0",
// "eslint-plugin-jsdoc": "^48.2.12",
// "eslint-plugin-jsx-a11y": "^6.9.0",
// "eslint-plugin-react": "^7.34.3",
// "eslint-plugin-react-hooks": "^4.6.2",
// "eslint-plugin-react-refresh": "^0.4.7",
// "eslint-plugin-testing-library": "^6.2.2",

import flowtypePlugin from "eslint-plugin-flowtype";
import jestPlugin from "eslint-plugin-jest";
import jsdocPlugin from "eslint-plugin-jsdoc";
import jsx11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import testingLibraryPlugin from "eslint-plugin-testing-library";

export default [
  {
    plugins: [
      flowtypePlugin,
      jestPlugin,
      jsdocPlugin,
      jsx11yPlugin,
      reactPlugin,
      reactHooksPlugin,
      reactRefreshPlugin,
      testingLibraryPlugin,
    ],
  },

  ...tseslint.config({
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
    ],
    rules: {
      // New ts rules go here:
    },
  }),
];

// /** @type {import("eslint").Linter.Config} */

// const config = {
//   plugins: ["jsdoc", "react-refresh"],
//   extends: ["react-app"],
//   rules: {
//     // ! I'd like to this rule on but need time to fix the warnings.
//     "no-async-promise-executor": "off",
//   },
//   overrides: [require.resolve("./typescript")],
// };

// module.exports = config;
