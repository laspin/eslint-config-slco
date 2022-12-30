module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-console': 0,
    'no-case-declarations': 0,
    'jsx-a11y/href-no-hash': 0,
    'testing-library/no-container': 0,
    'testing-library/no-node-access': 0,
    radix: 0,
    'no-debugger': 0,
    'no-use-before-define': 'off',
    'import/no-cycle': 'off',
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [1, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [1, 'as-needed'],
    'no-unused-expressions': [
      1,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      1,
      {
        props: false,
      },
    ],
    'import/prefer-default-export': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/display-name': 0,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/label-has-associated-control': [
      1,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],

    'no-shadow': [
      1,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      1,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'off',
      {
        aspects: ['invalidHref'],
      },
    ],
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
    '@typescript-eslint/comma-dangle': ['off'],
    'react/jsx-props-no-spreading': 0,

    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 90,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'lf',
        jsxSingleQuote: false,
        arrowParens: 'avoid',
        htmlWhitespaceSensitivity: 'strict',
        semi: false,
        bracketSameLine: false,
        proseWrap: 'always',
        requirePragma: false,
        singleAttributePerLine: true,
        bracketSpacing: true,
      },
    ],
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks', 'prettier'],
}
