---
layout: post
title: JavaScript Promises, await and async - Part 2
categories: javascript promises
---
**[First post in this series](https://kyleplo.github.io/b/js-promises-await-and-async-1/)**

So what about `await` and `async`? The `await` keyword lets you make code wait for a promise to end. For example:
```javascript
await myPromiseFunction();
// Code after promise resolves
```
For security reasons, you can't have `await` anywhere. You need to wrap it in an `async function`. There are to ways to do this:
```javascript
async function myAsyncFunction(){
   await myPromiseFunction();
   // Code after promise resolves
}
myAsyncFunction();
// Or:
(async function(){
   await myPromiseFunction();
   // Code after promise resolves
})();
```
### Examples
First, let's extend the timer example from yesterday with `await`.
1. Put the wait code in a function
```javascript
function wait(){
var myPromise = new Promise(function (resolve,reject){
setTimeout(function (){
   resolve("Timer finished!");
},1000);
});
return myPromise;
}
```
2. Create an `async function`
```javascript
function wait(){
var myPromise = new Promise(function (resolve,reject){
setTimeout(function (){
   resolve("Timer finished!");
},1000);
});
return myPromise;
}
async function myAsyncFunction(){
// More code goes here
}
```
3. Add an `await` statement
```javascript
function wait(){
var myPromise = new Promise(function (resolve,reject){
setTimeout(function (){
   resolve("Timer finished!");
},1000);
});
return myPromise;
}
async function myAsyncFunction(){
   await wait();
}
```
4. Add console messages and call the function
```javascript
function wait(){
var myPromise = new Promise(function (resolve,reject){
setTimeout(function (){
   resolve("Timer finished!");
},1000);
});
return myPromise;
}
async function myAsyncFunction(){
   console.log("timer started");
   await wait();
   console.log("timer ended");
}
myAsyncFunction();
```
#### Fetch Example
Promises aren't just for timers. The `fetch` method uses promises, and we can use `await` and `async` with it.

1. Create a `fetch` call
```javascript
fetch("https://kyleplo.github.io/myTextFile.txt")
   .then(function (r){
      return r.text()
   });
```
2. Add `await` and wrap with `async`
```javascript
async function myAsyncFunction(){
   var r = await fetch("https://kyleplo.github.io/myTextFile.txt")
      .then(function (r){
         return r.text()
      });
}
```
3. Add a call and show the result
```javascript
async function myAsyncFunction(){
   var r = await fetch("https://kyleplo.github.io/myTextFile.txt")
      .then(function (r){
         return r.text()
      });
   console.log(r);
}
myAsyncFunction();
```
