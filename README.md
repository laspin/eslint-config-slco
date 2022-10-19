## ESLint-Config-SLCO &nbsp; :page_with_curl:

:coffee: NPMJS <kbd>URL:</kbd>  <a href="https://www.npmjs.com/package/eslint-config-slco" title="SLCO" target="_blank">ESLint-SLCO</a> 

<br />

___Eslint-config-slco___ is an npm package with my eslint and prettier settings.  Easy to use and easily extended. :beer:

<br />

### Install Package

```text
  npm i eslint-config-slco@latest
```
<br />

### Create a .eslintrc file and add this:

```json
 {
    "extends": ["slco"]
 }
 //or inside package.json
```
<br />

### Add linting scripts

Inside package.json file:

```json
 {
  "scripts": {
    "slco": "npx install-peerdeps --dev eslint-config-slco", // run once
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
 }
```

<br />

### Using Create React App:

In package.json change **Extends React-App** to:

```json
 {
   "extends": ["react-app","slco"] // last
 }
```


<br />

### To overwrite __eslint__ or __prettier__ settings:

Do so inside of **rules** for eslint and under **prettier/prettier** for prettier

```json
  //example  
 {
  "extends": [
    "slco" // (last)
  ],
  "rules": {
    "no-console": 1,
    "prettier/prettier": [
      "warn",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 70,
      }
    ]
  }
 }
```

<br />

### Using WebStorm

```text
- In Webstorm disable Prettier
- Set ESLint to automatic inside Webstorm
```













