---
layout: post
title: Google Translate uses unsupported html tag
categories: googletranslate tags
---
I was inspecting a Scratch 3.0 page, and I wanted to translate something. I used Chrome's context menu to translate it, and guess what! The original HTML was this:
```html
<select aria-label="language selector" class="language-selector_language-select_8Vfnm">
 <option value="en">English</option>
 <option value="ar">الْعَرَبِيَّة</option>
 <option value="de">Deutsch</option>
 <option value="es">Español</option>
 <option value="he">עִבְרִית</option>
</select>
```
And the result was this:
```html
<select aria-label="language selector" class="language-selector_language-select_8Vfnm">
 <option value="en">English</option>
 <option value="ar">
  <font style="vertical-align: inherit;">
   <font style="vertical-align: inherit;">العربية</font>
  </font>
 </option>
 <option value="de">Deutsch</option>
 <option value="es">Español</option>
 <option value="he">
  <font style="vertical-align: inherit;">
   <font style="vertical-align: inherit;">Abrit</font>
  </font>
 </option>
</select>
```
At first, I thought this was a bug in Scratch 3.0, but I couldn't find anything wrong with the code. Then, for some reason, Scratch crashed. I reloaded the page, inspected, and was surprised to find the the error was gone. I translated again, and the error was back. Why is Google Translate using the unsupported `<font>` tag?
