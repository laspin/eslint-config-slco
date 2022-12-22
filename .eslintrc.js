module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    jest: true,
  },

  plugins: ['eslint-plugin-react', 'react-hooks', 'prettier'
  ],

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
    },
  },

  settings: {
    react: {
      version: '999.999.999',
    },
  },

  rules: {
    'no-debugger': 0,
    'no-use-before-define': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'react/jsx-no-useless-fragment': 1,
    'react/no-unstable-nested-components': 1,
    'eact/prop-types': 0,
    'camelcase': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      1,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      1,
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
    'no-console': 0,
    'no-case-declarations': 0,
    'import/prefer-default-export': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'import/no-duplicates': 0,
    'jsx-a11y/accessible-emoji': 0,
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/href-no-hash': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],

    'react/display-name': 0,
    'react/no-array-index-key': 1,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/function-component-definition': 0,
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-props-no-spreading': 0,
    'testing-library/no-container': 0,
    'testing-library/no-node-access': 0,

    radix: 0,

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

    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 70,
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
}
