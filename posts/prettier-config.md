---
title: "Config your Prettier"
date: "2022-04-10"
image: prettier-config.png
excerpt: Prettier can help keep your code tidy almost without even thinking about it.
isFeatured: true
---

---

Prettier is popular **extension**, used in several code editors to keep your code in restricted styling frames.

## Yes, yes, documentation

Like always, [documentation](https://prettier.io/) allows you dive deeper into this subject.

## Set up JavaScript config file

After installation this extension in your code editor (e.g. VS Code), you can manage some basic settings inside extension's settings. But easy and common way to control your code style is to create in project root directory file named: _.prettierrc.js_. Inside you should use _module.export_ and define an object with code styling:

```js
module.exports = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
};
```

## Auto help

Keep in mind, that if you want to have auto correct your code, you should let know about it your code editor. In VS Code, check two places:

1. if auto save is turn on --> use shortcut **ctrl + ,** to start VS Code settings (or open it manually), in filter type **format on save** and make sure that you have checked box: **format on save**.
2. if _prettier_ is default code formatter --> use shortcut **ctrl + ,** to start VS Code settings (or open it manually), in filter type **formatter** and set **Prettier** as default one.

## Your options

You have a lots of possible options. Below you can find some most important in my opinion:

- arrowParens: **"always"** (default - always put parenthenses around a solo function parameter) | **"avoid"** (dont put it)
- bracketSameLine: **true** (put the > of a mulit-line HTML, JSX element at the last line) | **false** (default - put > alone on the next line)
- bracketSpacing: **true** (print spaces between brackets in object literals - default) | **false**
- singleQuote: **false** (default) | **true** (use '' instead of "")
- trailingComa: **"es5"** (where valid in ES5 - default) | **"none"** (no trailing commas) | **"all"** (wherever possible)
- endOfLine: **"lf"** (\n - default) | **"crlf"** (\r\n) | **"cr"** | **"auto"** (set on the basis of the first line)
- tabWidth: **2** (default - number of spaces per indentation-lever) | **some another int**

All list of options you can find [here](https://prettier.io/docs/en/options.html).

---

> see you around!
