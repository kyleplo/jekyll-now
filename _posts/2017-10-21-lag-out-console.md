---
layout: post
title: Lag out the browser console!
categories: lag console
---
Ever wanted to lag out the browser console? Well now you can! This code makes the console glitch out. If you try scrolling, some parts of the console will disappear. You may even need your task manager to close the tab!!!
```js
function error(s,m){return setInterval(function (){console.error(m || "ERROR");console.warn(error())},s || 1000)}
```
To use, paste into the console, then call the function `error(speed,message)`
**Example:**
```js
error(1000,"ERROR");
```
