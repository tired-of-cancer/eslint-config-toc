# eslint-config-toc

This package allows us to make decisions on code styling for all TypeScript based projects developed by or for Tired of Cancer B.V. 

1. Useable in any TS project (react, react-native, next.js etc).
1. Extends proven conventions (airbnb config, unicorn plugin etc).
1. Allows for opiniated deviations (added consistency or sensible overrides).

## Usage

1. `yarn add -D eslint eslint-config-toc`
1. Setup your project config in `.eslintrc.js`:

```js
// This enables ESLint to use dependencies of this config
// (see https://github.com/eslint/eslint/issues/3458)
require('eslint-config-toc/setupPlugins');

module.exports = {
  // Add configs based on your needs
  extends: [
    'toc/typescript',
    'toc/react', // Optional, adds React web config
    'toc/react-native', // Optional, adds React Native config
  ]
}
```

3. If you use TypeScript, add `"extends": "eslint-config-toc/tsconfig.json"` to your `tsconfig.json`.
4. Happy linting!

## Versioning

 - Patch releases are for improved documentation, fixing a rule to stop reporting false positives and internal code changes.
 - Minor releases are for changes to rules that can automatically be fixed.
 - Major releases happen when rules are changed that can't be fixed automatically.
