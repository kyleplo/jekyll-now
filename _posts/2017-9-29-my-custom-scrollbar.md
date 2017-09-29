---
layout: post
title: My custom scroll
---
### My custom scrollbars
As you may have noticed, I use a custom scrollbar on this website. I think they are awesome because you can customise your site more. 
However, mine happens to be very weird:
```css
::-webkit-scrollbar {
  width: 1%;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #ee8800;
}

::-webkit-scrollbar-track-piece:start {
  background: linear-gradient(white, #ee8800);
}
```
-The first part sets the width to 1% the width of the screen. This makes it change size base on screen size.
-The second part makes the corners round and the scrollbar orange.
-The third part adds a gradient.

In my opinion, the gradient is the weirdest part. Once you have scrolled down, the scrollbar has an orange gradient leading down to the part you drag.

To learn more about custom scrollbars, see https://css-tricks.com/custom-scrollbars-in-webkit


pointless text to make scrollbar appear


pointless text to make scrollbar appear


pointless text to make scrollbar appear


pointless text to make scrollbar appear
