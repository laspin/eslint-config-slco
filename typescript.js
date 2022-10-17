module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    // rules from `@typescript-eslint/eslint-plugin`
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // all the JS Rules
    './.eslintrc.js',
  ],
  // then some extra for Typescript
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
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
    // this is already covered by the typescript compiler
    'no-undef': 'off',
    'no-shadow': 'off', // TS does it
  },
  parserOptions: {
    project: './tsconfig.json',
  },
}
