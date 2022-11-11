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

```json
 npm run-script  //it shows list of avail scripts. If so type:
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
