---
layout: post
title: Beware of document.lastModified!
categories: server document
---
Today, I was trying to figure out how old a web file was, I used `document.lastModified`, and I was surprised to see that the date was today, a few seconds ago. That info didn't seem right, so I reloaded the page. This time, the date was different, now even more recent! I think this was because the file was returned by a server scripting language, which "created" the file a few seconds ago, even though the file was really older. So beware of using `document.lastModified`; it might be wrong.
