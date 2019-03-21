---
layout: post
title: Custom HTML Elements!
categories: html javascript custom-elements
---

Sorry about not posting, I've been busy over at [@overcastchat](https://github.com/overcastchat). Also just got a [PyPortal](https://www.adafruit.com/product/4116).

Anyway, I was looking up how to make custom HTML elements, and really, it's a lot easier than you think.

## Just CSS

If you're making something really simple, with just CSS styling and no special stuff, you don't even need JavaScript!

```css
red {
 color: red;
}

red[invert=true] {
 color: white;
 background: red;
}
```
```html
<red>This text is red!</red>

<red invert="true">This text is inverted red!</red>
```

I don't know if this is valid code, but it works in most browsers...

## Using JavaScript

But in most cases, you want something more complex. Now you need JavaScript:

```javascript
class AlertText extends HTMLElement {
 constructor() {
  // Always call super first in constructor
  super();

  // write element functionality in here
  this.addEventListener("click",function (){
   alert(this.getAttribute('text') ? this.getAttribute('text') : "");
  })
 }
}
customElements.define('alert-text', AlertText);
```
Just treat `this` as a normal element object.
```html
<alert-text text="It works!">Click here</alert-text>
```
## Using shadows

A shadow is when you have an element created as part of the constructor, to create native-like UI. See [this for info. I don't really get it.](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Autonomous_custom_elements)

## Using other elements as templates

You can replace `HTMLElement` with `HTMLParagraphElement` or any other element object. Then use it like this:
```html
<p is="my-custom-paragraph">blah blah blah</p>
```

## Support

Supported in every major browser except Edge. Using elements as templates only works in Chrome and Firefox
