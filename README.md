## ESLint-Config-SLCO &nbsp; :page_with_curl:

:coffee: NPMJS <kbd>URL:</kbd>  <a href="https://www.npmjs.
com/package/eslint-config-slco/v/1.2.6" title="SLCO" target="_blank">ESLint-SLCO</a>

<br />

___Eslint-config-slco___ is an npm package with my eslint and prettier settings.  Easy to use and easily extended. :beer:

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
    "extends": ["slco"] //last
    }
 }
```
<br />

### III. Add linting scripts

- In package.json file:

```json
 {
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
 }
```


<br />

### IV. To overwrite __eslint__ or __prettier__ settings:

- Do so inside of **rules** for eslint and under **prettier/prettier** for prettier

```json
  //example  
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
