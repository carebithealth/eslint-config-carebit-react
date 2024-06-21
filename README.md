Copied from: https://github.com/facebook/create-react-app - `packages/eslint-config-react-app`

# Differences from original (eslint-config-react-app):

- Updated all package versions
- Moved all rule configurations from `index.js` -> `recommended.js`
- Created a new `index.js` for our own custom rules.

# Making changes

Try to only make changes to `index.js` when defining new rules.

The original `eslint-config-react-app` represents good standardized practices. Keeping `recommended.js` unchanged gives us a good baseline and makes us define explicit exceptions when we deviate from the standard.

# Usage

Install the package: (Replace `[version-tag]` with the specific version tag of the release to include.)

```
yarn add -D eslint-config-carebit-react@carebithealth/eslint-config-carebit-react#[version-tag]
```

This should create a line in `package.json` that looks like this:

```
"eslint-config-carebit-react": "carebithealth/eslint-config-carebit-react#v0.1",

```

# Dev and publish workflow

1. Create a new branch to do the testing on.
2. Make a change locally and then push to the new branch
3. You can test out the changes on the `carebit` app by updating the line in the package.json to reference the specific commit you would like to try out: `"eslint-config-carebit-react": "carebithealth/eslint-config-carebit-react#[commit-hash]",`
4. When you're done, merge the changes into master using a (conventional commit)[https://www.conventionalcommits.org/en/v1.0.0/]. (Can be with a PR or without)
5. Create a new release on github on the new commit into master. Make the release tag following the same pattern of `v0.1`
6. Update the each of the `project.json` files for the clients in the `carebit` repo to reference the new version tag. (run yarn for each client to update the yarn.lock)
