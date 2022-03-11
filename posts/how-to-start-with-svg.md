---
title: How to start with SVG?
excerpt: Scalable Vector Graphics will make your images always readable, regardless of resolution!
image: svg.png
isFeatured: false
date: "2022-03-11"
---

---

## What is SVG?

Scalable Vector Graphics – **SVG** is a universal format of two-dimensional vector graphics (static and animated), free of licenses and patents. SVG was developed for use on the Web. SVG belongs to the XML family, so it can be integrated with other languages, such as XHTML. Vector graphics is a type of computer graphics where the image is described by geometric figures placed in a mathematically defined two-dimensional coordinate system. Vector graphics - also called object graphics - is related to the fact that the image is described by primitive objects, i.e. simple geometric figures such as: segments, curves, circles or polygons. The objects are uniquely defined which mean they have its position defined by parameters and its appearance by attributes. SVG files do not lose their sharpness when scaled, because they are not a collection of pixels, but vectors (objects) and the quality depends only on the accuracy of the description of the data of the constituent objects of the image. Another advantage of it is that they take very little memory and can be placed directly in the page code, no need to download it.

### How to insert it into code?

SVG files can be putted between <svg> tag or as source in <img> tag. In the first case, we have more control over the element, because we can add a class to each figure in the image and change its appearance in css, however it usually take up many lines of code. When we download the svg file to the <img> tag, we do not have such control, even if in the external file the classes are assigned. In addition we have to put xmlns=”http://www.w3.org/2000/svg” inside svg open tag.

![example of putting svg into code](svg-example-one.svg)

### Use one SVG multiple times.

Put the code with the SVG at the very bottom of the page where it won't make a mess, wrap inner code in a <symbol> tag with a unique ID and now it can be recalled anywhere with the <svg> and <use> tags with particular ID. Without recall the image will not display, thanks to the <symbol> tag. Example below.

```js
//declaration
<svg width='200' height='200'>
  <symbol id='example'>
    <rect width='100%' height='100%' fill='red' />
    <circle class='circle' cx='150' cy='100' r='40' fill='green' />
    <text x='100' y='125' font-size='60' text-anchor='middle' fill='white'>
      SVG
    </text>
  </symbol>
</svg>
```

```js
//calling
<svg>
  <use href='#example'></use>
</svg>
```

_Note that Safari does not support 'href' attribute in the <use> tag. It needs this syntax: xlink:href="#ID" and it is best to type both, just to be sure._

### Creating shapes

In general, we add shapes, lines or text between the opening and closing <svg> tags. Each of these elements must have a specific position on our canvas and appearance. Many attributes are set by default (e.g. background color to black). The order in which elements are entered in the code determines which element is above which. In the example below, we draw a circle by using the appropriate <circle /> tag and specifying it in the viewport: radius 50px, center located 100px horizontally and 100px vertically from the start of our canvas (i.e. the top left corner). Fill color: blue.

```js
<svg width='100' height='100'>
  <circle r='50' cx='50' cy='50' fill='blue' />
</svg>
```

Some shapes:

- <circle /> - circle, requires attributes: radius **r**, horizontal position **cx** and vertical position **cy**.
- <rect /> - rectangle, we control the position of the upper left corner: **x**,**y**, also: **width** and **height**. We can round the **rx** and **ry** corners.
- <line /> - line, requires a starting point **x1**, **y1** and an ending point **x2**, **y2**, **stroke** and **stroke-width**.
- <poligon /> - polygon, the next vertex points are given in the points attribute, in pairs, separated by spaces: **points=”50,50 200,50, 200,200”**.
- <polyline /> - lines, its next points are given in the points attribute, in pairs, separated by spaces: **points=”0,0 30,50, 100,100”**, require setting **stroke**, **stroke-width** and set **fill to none**.
- <text>my text</text> - require position of upper left corner of text : **x**,**y**.

Some attributes:

- fill – background color: fill = "# ccc", if we do not want a background, enter 'none'. The default is black.
- fill-opacity – background transparency, 1 - full color, 0 - transparent.
- stroke – border: stroke=”black”.
- stroke-width - border width.

### Defining the canvas size

In the <svg> tag itself, we specify the canvas dimensions. We can use two options here:

- viewport - the dimension of our canvas defined by its width (width) and height (height). We can define the attributes directly in our <svg width="50" height="50" > tag, or assign a class in it and define the width and height in css.
- viewBox - optionally, next to the viewport - controls how we see our canvas, it's like a zoom, we give it the coordinates of the upper left corner (where it should start in relation to our viewport) and then the width and height, which will create a visible rectangle, cut from our viewport (zoom-in), or fitted to it(zoom-out).

![defining the viewport](svg-example-two.svg)

Same viewport, but we add a viewBox that starts in the center of the circle and is 300px wide and 300px tall, all fitting into the existing viewport dimensions:

![defining the viewBox](svg-example-three.svg)

It may by a little confusing, I hope picture below can explain it more. It show how to use viewBox to zoom-in an object.

![explaining the viewBox](svg-example-four.svg)

### Do you want more?

I hope I have introduced you to the topic of SVG graphics, if you want to know more, there is a lot of information on this in the Internet. You can check it out [here](https://www.w3schools.com/graphics/svg_intro.asp) or find it on your own.

---

> see you around!
