module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-plugin',
    './.eslintrc.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  // typescript rules
  rules: {
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      { ignoreRestSiblings: true },
    ],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'warn',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // already covered by the typescript compiler
    'no-undef': 'off',
    'no-shadow': 'off',
  },
  parserOptions: {
    project: './tsconfig.json', // leave as is now
  },
}
