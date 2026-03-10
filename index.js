/** @type {import("eslint").Linter.Config} */

const config = {
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  extends: [require.resolve("./recommended")],
  rules: {
    // TODO: Fix all the errors so we can turn this rule on :)
    "no-async-promise-executor": "off",
    curly: ["error", "all"],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["*Generated", "*Generated.ts"],
            message:
              "Do not import from Generated files directly. Import from the non-Generated wrapper file instead (e.g., PatientResponse instead of PatientResponseGenerated).",
          },
        ],
      },
    ],
    "no-restricted-globals": [
      "warn",
      {
        name: "localStorage",
        message:
          "Please use the shared 'storage.local' utility instead of accessing localStorage directly",
      },
    ],
    "prefer-promise-reject-errors": ["warn", { allowEmptyReject: true }],
    "no-restricted-syntax": [
      "error",
      {
        selector: "JSXAttribute[name.name=/^(?!aria-|data-)[a-z]+-[a-z]/]",
        message:
          "SVG attributes in React must use camelCase (e.g., stopColor instead of stop-color). Use camelCase for all SVG attributes. Note: aria-* and data-* attributes are allowed.",
      },
    ],
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
    {
      files: ["**/apiTypes/**/*.ts"],
      rules: {
        "no-restricted-imports": "off",
      },
    },
    {
      files: ["**/*.spec.{js,ts,jsx,tsx}"],
      rules: {
        "no-restricted-syntax": [
          "error",
          {
            selector:
              'NewExpression[callee.name="Date"][arguments.length>1]',
            message:
              "Please use the string format with new Date() like `new Date('2000-01-01T00:08:30.000')`",
          },
        ],
        "@typescript-eslint/no-explicit-any": "off",
      },
      globals: { vi: "readonly" },
    },
  ],
};

module.exports = config;
