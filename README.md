Copied from: https://github.com/facebook/create-react-app - `packages/eslint-config-react-app`

# Differences from original (eslint-config-react-app):

- Updated all package versions
- Moved all rule configurations from `index.js` -> `recommended.js`
- Created a new `index.js` for our own custom rules.

# Making changes

Try to only make changes to `index.js` and `typescript.ts` when defining new rules.

The original `eslint-config-react-app` represents good standardized practices. Keeping `recommended.js` unchanged gives us a good baseline and makes us define explicit exceptions when we deviate from the standard.

# Usage

Install the package: (Replace `[git-commit-hash]` with the specific commit of the version to include.)

```
yarn add -D eslint-config-carebit-react@carebithealth/eslint-config-carebit-react#[git-commit-hash]
```

This should create a line in `package.json` that looks like this:

```
"eslint-config-carebit-react": "carebithealth/eslint-config-carebit-react#0581cdb3fc1a18d0a2866e1c7978f58f547a7e27",

```

# Publishing an update

If you make a change to this repo and want that change reflected in the `carebit` app, then copy the git commit for the latest change and update the `[git-commit-hash]` in each of the `project.json` files for the clients:
