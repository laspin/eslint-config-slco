## ESLint-Config-SLCO &nbsp; :page_with_curl:

NPMJS URL: <a href="https://www.npmjs.com/package/eslint-config-slco" title="SLCO" target="_blank">ESLint-SLCO</a> 

ESLint Prettier config

<br />

### Install Package

```js
  npm i eslint-config-slco
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













