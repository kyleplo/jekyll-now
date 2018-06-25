---
layout: post
title: Creating an ASCII Camera
categories: camera ascii javascript
---
[View the demo that goes with this post](https://kyleplo.github.io/c/demos/ascii-cam)

A few days ago, I read [this blog post](https://www.jonathan-petitcolas.com/2017/12/28/converting-image-to-ascii-art.html) about creating ASCII art from images. I was bored yesterday, so I decided to create my own.

# Creating the Camera
## 1. Getting to the Camera
The camera is always tricky to get to, so this part can be confusing. I copy-pasted some code from [David Walsh's post about HTML5 camera](https://davidwalsh.name/browser-camera):

```javascript
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
    video.srcObject = stream;
    video.play();
  });
```
Now, we have our video stream in a video element.

## 2. Putting It on a Canvas (and shrinking it)
We want to put the image on a canvas, so we can quickly get image data, and we need to shrink it, because a pixel is much smaller than an ASCII character.
```javascript
ctx.drawImage(video,0,0,80,45);
var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
```
## 3. Converting to Greyscale
The image should be in greyscale because ASCII characters are black and white. In Jonathan Petitcolas's post, a more complex greyscale formula is used, but I just used a simple average of the RGB values:
```javascript
var average = (imgData.data[i] + imgData.data[i+1] + imgData.data[i+2]) / 3;
```
## 4. Choosing the Character to Display
The way an ASCII camera works, is it takes a character from a list of characters. Each character represents a different brightness range. So once we have our brightness for each pixel, we need to convert it to a character from a list:
```javascript
function getChar(num,chars){
  if(chars.length === 0){return "-"};// If the user doesn't choose anything, display hyphens
  if(!chars[Math.floor(num / (255 / chars.length))]){return "<span style='color: red' title='" + num + "'>E</span>"};// Error catching
  return chars[Math.floor(num / (255 / chars.length))]
}
```
# Extra Features
## Custom Characters
I added an input element to set the user select custom characters to use.

## Color
I later decided to add color. Because the ASCII characters take care of brightness, you only really need the hue. I used [@mjackson 's converter](https://gist.github.com/mjackson/5311256) to get the hue.

[View the demo that goes with this post](https://kyleplo.github.io/c/demos/ascii-cam)
