---
title: 'Why do we need NextJS?'
date: '2022-02-23'
image: nextjs-title.png
excerpt: NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.
isFeatured: true
---

---

NextJS is a **framework for ReactJS**.

_framework_ is bigger then library (e.g. React), contains rules and more build-in elements. NextJS solves many basic problems and makes it easier to build React applications.

![what give us NextJS as framework](next-framework.png)

### What makes Next special?

As see above, thera are three major reasons to use NextJS:

1. preparing pages content on the server, not in browser
2. simple file-based routing
3. possibility of making backend code

#### 1. SEO and SSR or SSG

Google robots, when looking for your page created by plain ReactJS, don't see your content, because server sending all your pages inside JavaScript, which controls what you see in browser. It is not good if you care about SEO (Search Engine Optimization). NextJS has a solutions for that:

- SSR - static site rendering - pages are generated at build time with the 'build' script and possibly, if we add such an option, updated every specified period of time to keep the content up to date, which may change after the upload (e.g.: comments added by users).
- SSG - server site generation - pages are generated 'on the fly' after deploying, after each request received.

SSR and SSG use special function, which you can put inside javascript files inside _pages_ folder (about _pages_ folder below). Just there. Both function's code is visible only on server, so your credentials are safe here, NextJS take care about that.

SSR use function **getStaticProps()**, which looks like that:

```js
export async function getStaticProps(context) {
  //fetch some data here
  return {
    props: {
      data: myFetchedData,
    },
    revalidate: 60,
  };
}
```

- context - argument giving us access to our url to create dynamic pages.
- return - function return an object, which have to contain key: _props_ which value is another object whit data passing to our component as props.
- revalidate - another key, which take number as value. That number is a period in seconds after which pages will be re-rendered if they are requested.

This is just a brief highlighting of the topic. If is that interesting for you, you can read more in official [documentation](https://nextjs.org/docs/basic-features/pages#two-forms-of-pre-rendering).

#### 2. Page folder.

NextJS has a file-system based router built on the concept of pages. When a file is added to the _pages_ folder, it is automatically available as a route.

- index routes: the router will automatically route file name _index_ to the root of the directory:

```js
'pages/index.js' -> '/'
```

- nested routes: if you create a nested folder, files will automatically routed in the same way. Next route to the index.js file when route fit to the folder name, if you want reach files inside folder with specific name, rout must contain it:

```js
'pages/blog/index.js' -> '/blog'
'pages/blog/my-post.js' -> '/blog/my-post'

```

- dynamic routes: to match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters:

```js
'pages/blog/[slug].js' -> '/blog/:slug' '(e.g. /blog/id-1)'
'pages/[username]/my-posts.js' -> '/:username/my-posts' '(e.g. /tom/settings)'
'pages/posts/[...all].js' -> '/posts/*'  '(e.g. /posts/2020/id/title)'
```

More information inside [documentation](https://nextjs.org/docs/routing/introduction).

#### 3. Fullstack App

NextJS allows you to put backend code inside _getStaticPrpos()
_ and _getServerSideProps_ but also allow you to make your own REST API to make requests and responses to reach some data. You just need to make in folder _pages_ folder named: **api**. Inside, similar to file-based routing, name of js file is our api endpoint.

```js
'pages/api/fetchData.js' -> '/api/fetchData'

```

Inside you can write code similar to Node and express.js where you have access to response and request object of http request. If you want, you can [read more](https://nextjs.org/docs/api-routes/introduction).

---

> see you around!
