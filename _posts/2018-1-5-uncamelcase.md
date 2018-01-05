---
layout: post
title: Uncamelcasify!
categories: camel case
---
Have you ever wanted to convert camel case to spaces? Try this code:

```javascript
function unCamelCasify(text){return text.replace(/[A-Z]/g,function (x){return " " + x.toLowerCase()})}
```

#### Example:
```javascript
unCamelCasify("MrBlueHasABlueHouseAndABlueCar");
// Returns " mr blue has a blue house and a blue car"
```

Created for [this issue](https://github.com/LLK/scratch-gui/issues/1153)
