---
title: 'Text truncation with css'
date: '2022-05-07'
image: text-truncation-css.png
excerpt: Sometimes you can’t use JavaScript to short long text for some reason, and CSS can help you to achieve the same result in no time!
isFeatured: false
category: 'css'
---

---

## CSS and one-line text truncation

Let’s say, that you have long paragraph and want to show just first line of it and three dots in the edge of that paragraph’s container:

```hmtl
<p>Ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

All you have to do in CSS is to write some extra code:

```css
p {
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

Result:

```html
Ipsum dolor ...
```

- **white-space: no wrap** → all text is in one line, there is no line breaks
- **overflow: hidden** → part of text which is outside of selected width (100px) is invisible
- **text-overlflow: ellipsis** → add three dots in the end of visible text

## Multiline text truncation

What when you need to show multiline text? Solution below:

```css
p {
  width: 150px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
```

Result:

```text
Ipsum dolor sit amet,
consectetur adipisicing
elit, do eiusmod tempor
incididunt ut ...
```

You have to hide unwanted text by **overflow: hidden** and use **-webkit-box** as a property of display. Next you need to just to set number of visible line with: **-webkit-line-clamp** and let know that yor content will be lays out vertically with **-webkit-box-orient**. This approach has almost 96% of browsers support according to [caniuse.com](https://caniuse.com/?search=display%3A%20-webkit-box). That is something that you have to be aware of - this solution will not work on all devices.

---

> see you around!
