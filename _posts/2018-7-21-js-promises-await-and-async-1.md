---
layout: post
title: JavaScript Promises, await and async - Part 1
categories: javascript promises
---
When I first learned JavaScript, I was like this is great, but how do you make stuff wait? I still have code that would never finish running, because unlike [Scratch](https://scratch.mit.edu), JavaScript does not re-render every frame of a `while` loop. I now know about `setTimeout`, but a new feature, Promises, make waiting much more easy.

If you've used `fetch` before, you know how promises work. Mainly, they have 2 parts: `then` and `catch`. Here's how code with a promise looks:
```javascript
thingThatReturnsPromise()
     .then(function (msg){
     // Success!
      })
     .catch(function (msg){
     // Fail.
     })
```
So that's simple, but how do you make promises?
1. Create a Promise object
```javascript
var myPromise = new Promise();
```
2. Add a function with resolve and reject
Resolve and reject are functions. Resolve calls `then`, and reject calls `catch`. They can take parameters that will also be passed on.
```javascript
var myPromise = new Promise(function (resolve,reject){
// More scripts here
});
```
3. Create a timer
```javascript
var myPromise = new Promise(function (resolve,reject){
setTimeout(function (){
   resolve("Timer finished!");
},1000);
});
```
4. Use in an example
```javascript
var myPromise = new Promise(function (resolve,reject){
setTimeout(function (){
   resolve("Timer finished!");
},1000);
});
myPromise.then(function (msg){
   alert("Message:" + msg)
});
```
And you're done!

See you tommorow for `await`, `async` and more examples!
