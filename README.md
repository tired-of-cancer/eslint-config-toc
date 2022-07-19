# 🚦 eslint-config-toc

This package allows us to make decisions on code styling for all TypeScript based projects developed by or for Tired of Cancer B.V.

1. Useable in any TS project (react, react-native, next.js etc).
1. Extends proven conventions (airbnb config, unicorn plugin etc).
1. Allows for opiniated deviations (added consistency or sensible overrides).

**Contents**

- [Usage](#-usage)
- [Proposing changes](#-proposing-changes)
- [Versioning](#-versioning)
- [Acknowledgements](#-acknowledgements)

## ⚙️ Usage

1. `yarn add -D eslint eslint-config-toc`
2. Setup your project config in `.eslintrc.js`:

**For bare TypeScript projects**

```js
// This enables ESLint to use dependencies of this config
// (see https://github.com/eslint/eslint/issues/3458)
require('eslint-config-toc/setupPlugins');

module.exports = {
  extends: ['toc/typescript'],
};
```

**For React web projects**

```js
// This enables ESLint to use dependencies of this config
// (see https://github.com/eslint/eslint/issues/3458)
require('eslint-config-toc/setupPlugins');

module.exports = {
  extends: ['toc/react'],
};
```

**For React Native projects**

```js
// This enables ESLint to use dependencies of this config
// (see https://github.com/eslint/eslint/issues/3458)
require('eslint-config-toc/setupPlugins');

module.exports = {
  extends: ['toc/react-native'],
};
```

3. If you use TypeScript, add `"extends": "eslint-config-toc/tsconfig.json"` to your `tsconfig.json`.
4. Happy linting!

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
   - An update to the version number in `package.json`. See [versioning](#-versioning) for details.
   - If applicable; the changes required to keep the files in this repository valid (test with `yarn lint`).
1. In the PR body, describe the following:
   - What is the reason for this change.
   - What will the impact be on existing projects.
   - How can the changes be (temporarily) ignored. Add a code snippet.

When the PR is ready for review, request reviews from the rest of the team. Discussion should happen in the PR comments as much as possible to ensure future developers can see why certain decissions were made in the past.

When more than half of the rest of the team agrees with the proposed changes, the PR can be merged.

## 📒 Versioning

- Patch releases are for improved documentation, fixing a rule to stop reporting false positives and internal code changes.
- Minor releases are for changes to rules that can automatically be fixed.
- Major releases happen when rules are changed that can't be fixed automatically.

## 🦸 Acknowledgements

The configured ruleset is based on [airbnb's eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). Check their documentation on the reasoning behind all the rules that are not specifically configured as deviations in this repository.

The setup of this configuration project was inspired by [eslint-config-molindo](https://github.com/molindo/eslint-config-molindo) and [eslint-config-ns](https://github.com/natterstefan/eslint-config-ns).
