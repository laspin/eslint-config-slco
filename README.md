## ESLint-Config-SLCO &nbsp; :page_with_curl:

:coffee: NPMJS <kbd>URL:</kbd>  <a href="https://www.npmjs.
com/package/eslint-config-slco" title="ESLint-config-slco" 
target="_blank">ESLint-config-slco</a>

<br />

___Eslint-config-slco___ is an npm package with my eslint and prettier settings.  Easy to use and easily extended. :beer:

###### No more `error` messages just `warnings`.

<br />

### I. Install Package

```text
  npm i eslint-config-slco@latest
```
<br />

### II. Extending eslint config in one of two ways:
 
- creating a new .eslintrc file in root of the project
- creating a new or adding to an exisitng eslintConfig object in package.json

```json
 {
    "extends": ["slco"] // with .eslintrc file
 }

 // or package.json eslintConfig object
 {
  "eslintConfig": {
    "extends": ["eslint-config-slco"] //add last
    }
 }
```
<br />

### III. Add linting & peerdeps scripts

- In package.json file:

```json
 {
  "scripts": {
    "slco": "npx install-peerdeps --dev eslint-config-slco",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
 }
```

• Before running `slco`, check if the script is available via npm:

```text
 npm run-script  // it shows list of avail scripts. If so type:
 npm run slco
```

&nbsp;..otherwise type:

```text
 npx install-peerdeps --dev eslint-config-slco
```

When correctly installed, it shows a SUCCESS message.

<img src="images/npmyay.png" alt='peerdeps installed message'>

<br />

### IV. To overwrite __eslint__ or __prettier__ settings:

- Do so inside of **rules** for eslint and under **prettier/prettier** for prettier

```json
  // example  
 {
  "extends": [
    "slco" // (last)
  ],
  "rules": { // ESLINT rules
    "no-console": 2, // overwrites eslint 1-warning with 2-error
    
    "prettier/prettier": [ // PRETTIER rules
      "warn",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 200, // overwrites 70 with 200
      }
    ]
  }
 }
```

<br />

### To have IDE do your dirty linting:

<br />

#### Using WebStorm :book:

```text
- In Webstorm disable Prettier plugin
- Set ESLint to automatic inside Webstorm
```

<br />

#### Using VSCode :book:

- In VSCode settings or
- Inside a new `.vscode/settings.json` file

```json
 {
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
 }
```

<br />

<kbd>OK</kbd>&nbsp; :100: &nbsp; <kbd>SL</kbd> 


<br />

#### REFERENCE FILES:

```text
  // REFERENCE PURPOSES: REACT & JEST

  // package.json
  "dependencies": {
    ...
    react-test-renderer
    ^18.2.0
    @testing-library/jest-dom
    ": "
    ^5.16.5
    @testing-library/react
    ": "
    ^13.4.0
    @testing-library/user-event
    ": "
    ^13.5.0
    jest
    ": "
    ^29.3.1
    jest-environment-jsdom
    ": "
    ^29.3.1
  }

  scripts: {
    ...
    "test": "jest --watchAll"
  }

  // babel.config.js
  module.exports
  = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ]
  ]
}

// jest.config.js
module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/app.css',
    // Support import ~
    '^~(.*)': '<rootDir>/node_modules/$1'
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.js'
  ],
  testEnvironment: 'jsdom'
}

/*
 * @jest-environment jsdom //  or per file
*/
```
