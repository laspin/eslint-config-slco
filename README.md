## ESLint-Config-SLCO &nbsp; :page_with_curl:

ESLint Prettier config

<br />

### Install Package

```js
 `npx install--peerdeps --dev eslint-config-slco`
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

In package.json change block that **Extends React-App** to:

```json
 {
   "extends": "slco" 
 }
```


<br />

### To overwrite __eslint__ or __prettier__ settings:

Do so inside of **rules** for eslint and under **prettier/prettier** for prettier

```json
  //example  
 {
  "extends": [
    "slco"
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













