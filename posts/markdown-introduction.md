---
title: Markdown language
excerpt: Markdown is simple markup language that speed up your web work!
image: markdown-introduction.png
isFeatured: true
date: '2022-02-19'
---

---

## What is Markdown?

Markdown is a lightweight markup language that you can use to add formatting elements to your plain text in documents. Created by John Gruber in 2004. Main goal of this language syntax is to make it as readable as possible, even before rendering it. Idea is easy: you just put some special characters inside your text (for example: **# Heading One**) and you receive a special tag (**<h1>Heading One<h1/>**) after rendering whole text document. The questions is why use such tool as markdown when you can use some WYSIWYG editor like Notepad, Microsoft Word instead? So, there are answers:

- versatility – you can use markdown to write websites, documents, notes, books, presentations, emails and messages
- portable – files containing markdown-formatted text you can open by any application which supported that format
- independent – you can create Markdown-formatted text on any device running any operating system
- safe – even in the future, if application you are using stops working, you will still be able to read your documents because of readable syntax
- common – a lot of webpages support this language (all readmes in GitHub use Markdown).
- easy – it does not take long time to learn Markdown syntax

### How does it work?

When you write in Markdown, the text is stored in plaintext file that has an .md or .markdown extension. Next some application (like Dillinger) open your text and convert Markdown-formatted text to HMTL so it can be displayed in web browsers. Alternatively you can use this app to save the text in a different format (e.g. pdf).

### How does Markdown syntax looks like?

The rules are simple: every line of text is rendered into paragraph tag <p> unless you use some special syntax that let know to the compiler that some piece of code should be treated differently. For example, below you can see some example how achieve this:

```md
# h1 title
```

Code above will return:

```html
<h1>h1 title</h1>
```

The more \# characters, the smaller the header. If yo want bold text, simply wrap content between to asterixes:

```md
**bold content**
```

Code above will return:

```html
<strong>bold content</strong>
```

To italicize text, add one underscore before and after a word op phrase:

```md
_italic text_
```

Code above will return:

```html
<em>italic text</em>
```

Want put a link? No problem, just use special syntax and enclose the link text in brackets and then follow it immediately with the URL in parentheses:

```md
[Duck Duck Go](https://duckduckgo.com)
```

Code above will return:

```html
<a href="https://duckduckgo.com">Duck Duck Go</a>
```

And so on! There are so many places in the Internet with Markdown's syntax documentation, where you can read more, for example open-source [Markdown Guide](https://www.markdownguide.org/). If you want to practice and see in real time result of your work, you can use one from many online applications to write in Markdown, like recommended by Markdown Guide [Dillinger](https://dillinger.io/).

### How I use Markdown?

All posts on this blog are made thanks to Markdown. In a simple and fast way, using the appropriate syntax, I write the content and save it in a file with the _.md_ extension. Then I import the content of these files via **Next.js** and convert it to HTML, then display in the browser. I am using the [react-markdown](https://github.com/remarkjs/react-markdown) package as a converter.

---

> see you around!
