// This enables ESLint to use dependencies of this config
// (see https://github.com/eslint/eslint/issues/3458)
require('../../setup-plugins')

module.exports = {
  extends: ['../../react-native'],
}
