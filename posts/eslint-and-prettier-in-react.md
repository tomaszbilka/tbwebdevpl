---
title: 'Prettier + ES + React'
date: '2022-04-27'
image: prettier-eslint.png
excerpt: Learn how to combine these two tools to achieve best results.
isFeatured: true
---

---

# Why use that tools together?

Prettier and ES Lint can work together. _Prettier_ can keep your code in wanted format (e.g. use only single quotes) , _ES Lint_ make sure to keep code style in good shape (e.g. always use imported variable). Prettier has more built-in rules, is less editable than ES Lint. ES Lint, on the other hand, is very flexible and you can choose the rules yourself. You can find a list of React rules examples [here](https://www.npmjs.com/package/eslint-plugin-react).

## First steps

Make sure that you have both extension installed in your code editor. You can read how to install Prettier in one of my previous posts. ES Lint can be installed by following steps:

1. install ES Lint into your project:

```js
npm install eslint --save-dev
```

2. create configuration file:

```js
npm init @eslint/config
```

After answering a few questions **.eslintrc.json** file will appear in your root folder inside application. Make sure to add:

```json
"extends": ["plugin:react/jsx-runtime"]
```

to be sure, that you don't have to import _React_ in every file inside your project. You can now add your rules inside to be sure, that ES Lint watch them. If you set value to **1** VS Code will throw a warning if you break that particular rule and if you set **2** will be an error. Example below show how to make sure that you can have only one component in every file:

```js
"rules": {
		"react/no-multi-comp": 1
}
```

## Combine it together

When you installed extension and have both file:

- .prettierrc.js
- .eslintrc.json

install two more packages:

- **eslint-config-prettier** which turns off all ES Lint rules that could conflict with Prettier
- **eslint-plugin-prettier** which integrates the Prettier rules into ES Lint rules

by typing inside terminal:

```html
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

Last thing you have to do is update _.eslintrc.json_ to have following configuration:

```json
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  }
}
```

That's it. From now on, there should be no conflicts between these two packages.

---

> see you around!
