# 🚦 eslint-config-toc

This package allows us to make decisions on code styling for all TypeScript based projects developed by or for Tired of Cancer B.V.

1. Useable in any TS project (react, react-native, next.js etc).
1. Extends proven conventions (airbnb config, unicorn plugin etc).
1. Allows for opiniated deviations (added consistency or sensible overrides).

**Contents**

- [Usage](#-usage)
- [Proposing changes](#-proposing-changes)
- [Versioning and releasing](#-versioning-and-releasing)
- [Acknowledgements](#-acknowledgements)

## ⚙️ Usage

This library requires node 16+. 

1. `yarn add -D eslint eslint-config-toc`.
2. Add the following to your `package.json`:

```json
"prettier": "eslint-config-toc/.prettierrc",
"resolutions": {
  "eslint-plugin-react-native": "4.0.0"
}
```

**For bare TypeScript projects**

3. Setup your project config in `.eslintrc.js`:

```js
// This enables ESLint to use dependencies of this config
// (see https://github.com/eslint/eslint/issues/3458)
require('eslint-config-toc/setup-plugins');

module.exports = {
  extends: ['toc/typescript'],
};
```

4. Add `"extends": "eslint-config-toc/tsconfig-typescript.json"` to your `tsconfig.json`.

**For React web projects**

3. Setup your project config in `.eslintrc.js`:

```js
// This enables ESLint to use dependencies of this config
// (see https://github.com/eslint/eslint/issues/3458)
require('eslint-config-toc/setup-plugins');

module.exports = {
  extends: ['toc/react'],
};
```

4. Add `"extends": "eslint-config-toc/tsconfig-react.json"` to your `tsconfig.json`.

**For NextJS web projects**

3. Setup your project config in `.eslintrc.js`:

```js
// This enables ESLint to use dependencies of this config
// (see https://github.com/eslint/eslint/issues/3458)
require('eslint-config-toc/setup-plugins');

module.exports = {
  extends: ['toc/nexstjs'],
};
```

4. Add `"extends": "eslint-config-toc/tsconfig-react.json"` to your `tsconfig.json`.

**For React Native projects**

3. Setup your project config in `.eslintrc.js`:

```js
// This enables ESLint to use dependencies of this config
// (see https://github.com/eslint/eslint/issues/3458)
require('eslint-config-toc/setup-plugins');

module.exports = {
  extends: ['toc/react-native'],
};
```

4. Add `"extends": "eslint-config-toc/tsconfig-react-native.json"` to your `tsconfig.json`.

5. Happy linting! 🎉

## 📣 Proposing changes

When proposing a change to this shared configuration, keep in mind that it will impact all ToC projects and developers. First ask yourself these questions:

1. Does the change improve consistency, security and/or stability of our codestyle?
1. Will the change benefit all projects and developers?
1. Is the effort worth the gain? For example, if the change cannot be auto-fixed by prettier it may cause a lot of refactor work.

If all of these questions can be answered with a strong 'YES', go ahead with a proposal for change:

1. Research the change and the impact on our existing projects.
1. Create a PR to this repository containing:
   - The change, added to the appropriate config (for example, React Native specific deviation rules should be added to `react-native.js`).
   - A comment right above the change(s) in the config files that explains in short why we are using that deviation.
   - If applicable; the changes required to keep the files in this repository valid (test with `yarn lint` and `yarn prettier`).
1. In the PR body, describe the following:
   - What is the reason for this change.
   - What will the impact be on existing projects.
   - How can the changes be (temporarily) ignored. Add a code snippet.
1. Add an appropriate label to the PR. These are used in our changelog automation:

- `bug` for solving bugs in this library or it's ci configuration.
- `documentation` for updating the instructions in the README or clarifying comments with existing deviations.
- `dependencies` for updating existing dependencies. These are usually done automatically by Renovate.
- `feature` for proposing a new rule deviation or adding a new dependency.
- `breaking` for any of the above changes when it also will cause breaking changes in any project depending on this library.

☝️ For an example PR, see #1.

When the PR is ready for review, request reviews from the rest of the team. Discussion should happen in the PR comments as much as possible to ensure future developers can see why certain decissions were made in the past.

When more than half of the rest of the team agrees with the proposed changes, the PR can be merged.

## 🚀 Versioning and releasing

When a PR is merged, the release notes for the next draft release are automatically prepared. Based on the added labels, the version number in the release title and package.json may be automatically updated as well.

When we are ready to publish a new version to NPM, all we need to do is publish the draft release:

1. Go to the [releases overview](https://github.com/tired-of-cancer/eslint-config-toc/releases).
1. Check if the last change has been added (the Github action workflow needs to complete after merging the most recent PR).
1. Edit the existing draft release. If there is no draft release, there were no changes since the last release.
1. Press `Publish release`.
1. Presto! A new Github release and tag have been made. A workflow will automatically publish this version to NPM.

## 🦸 Acknowledgements

The configured ruleset is based on [airbnb's eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). Check their documentation on the reasoning behind all the rules that are not specifically configured as deviations in this repository.

The setup of this configuration project was inspired by [eslint-config-molindo](https://github.com/molindo/eslint-config-molindo) and [eslint-config-ns](https://github.com/natterstefan/eslint-config-ns).
