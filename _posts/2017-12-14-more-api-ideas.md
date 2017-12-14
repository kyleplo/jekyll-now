---
layout: post
title: More Cool API Ideas
categories: api ideas
---
The new progressive web app ideas that browser developers have are pretty cool. But I think there are a few APIs that the web would be way cooler with.
This is the second post out of a [series of posts](https://kyleplo.github.io/blog#ideas)
#### 4. Widget API
Some platforms, mostly phones have widgets that you can place on your home screen. What if websites could create them?
**Example:**
```javascript
navigator.createWidget("currentTime",{
title: "Current Time",
color: "#ee8800",
content: [
{type: "updatingText",key:"getTime"},
{type: "button",label: "Open website",key:"openSite"}
]
},function (res){
if(res.type === "getTime"){return time}else if(res.type === "openSite"){window.open("http://time.is")}
}
);
if(userDoesNotWantWidget){navigator.removeWidget("currentTime");}
```
#### 5. Document Print API
Somehow, Google Docs is able to print only part of the page, in this case, the document. This would make it much easier!!
**Example:**

HTML:
```html
<p>This will print only part of the page.</p>
<p id="print">I will get printed!!</p>
```
JavaScript:
```javascript
window.print(document.getElementById("print"),{doubleSided: false, sheets: 1, color: true});
```
