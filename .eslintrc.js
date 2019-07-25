module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['prettier'],
  globals: {
    describe: true,
    test: true,
    waitFor: true,
    by: true,
    element: true,
  },
  rules: {
    'no-var': 1,
    quotes: 0,
    'prefer-destructuring': 1,
    'react/prop-types': [
      'enabled',
      { ignore: 'ignore', customValidators: 'customValidator' },
    ],
    'no-underscore-dangle': [1, { allowAfterThis: true }],
    'class-methods-use-this': 0,
    indent: ['error', 2],
    'max-len': 'off',
    camelcase: [2, { properties: 'always' }],
    indent: 'off', // Let's let Prettier take care of this
  },
};
