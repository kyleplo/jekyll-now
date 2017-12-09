---
layout: post
title: Cool API Ideas
categories: api ideas
---
The new progressive web app ideas that browser developers have are pretty cool. But I think there are a few APIs that the web would be way cooler with.
#### 1. Spellcheck API
This API would let developers modify the list of spellcheck words on that website. These change would be on that website **ONLY**, unless the user accepted a permission that lets the website change the whole list.

**Example:**

```javascript
spellcheck.addWords(["3D","emojis","preload","highscore","spacebar"]);
// Those words are all words Chrome thinks I misspelled
spellcheck.suggest({"space bar":"spacebar"});
// This would let you suggest a correct word for a wrong word
window.addEventListener("misspell",function (e){
   alert("You spelled " + e.word + " wrong!");
   });
```
#### 2. Screenshot API
You could use this API to take screenshots and screencasts of a webpage. This would work like the camera API.

**Example:**

```javascript
navigator.requestScreenShot().then(function (stream){
   document.getElementById("video").src = window.URL.createObjectURL(stream);
   document.getElementById("video").play();
   })
```
#### 3. Evaluation API
Although we have the `eval()` function, it is know to be insecure and "`eval` can be evil". This new API would let you provide a new context to replace the `window` context, and could only connect with the host page using `window.postMessage()`.

**Example:**

```javascript
var script = new Evaluation();
var cat = "meow";
var context = {dog: "woof"};
script.setContext(context);
script.setCode(function (data){
   dog; // Returns "woof"
   cat; // Returns undefined because it is in wrong context
   data; // Returns "hello world"
   return "Dogs say " + dog;
   });
script.run("hello world");// Returns "Dogs say woof"
```
That's all for now. I'll post more if I have more ideas.
