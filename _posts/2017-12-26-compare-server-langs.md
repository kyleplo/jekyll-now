---
layout: post
title: Compare Server Scripting Languages
categories: compare server
---
For Christmas, I was able to renew my 1and1 subscription so I can now continue using server languages!! Yay! I won't stop using Github Pages, I like it for blogs, and project sites, but I also want to do some stuff with servers. But I'm trying to decide what language(s) to use.

### Here are the languages I will compare:

- PHP
- Python (no add-ons)
- Python (Django)
- Node.js

### Here are the things I am looking at:

- Price
- Simplicity of returning "Hello world"
- Simplicity of returning the current minute

### Prices

I used the lowest possible price.

|-|PHP|Python|Python (Django)|Node.js|
|---|---|---|---|---|
|First Year|$11.88|$11.88|$11.88 (Install on python server)|$119.88|
|Other years|$95.88|$95.88|$95.88 (Install on python server)|$119.88|

#### Best options if you are pricy
PHP or Python. Why not Django? It requires extra installation, at it's lowest price, requires high price for pre-installation.

### Simplicity of returning "Hello world"
|-|PHP|Python|Python (Django)|Node.js|
|---|---|---|---|---|
|Code|`<p>Hello world!</p>`|`print("Hello world!");`|`from django.http import HttpResponse [line break] def index(request): [line break] return HttpResponse("Hello world!")`|`var http = require("http");http.createServer(function(reqst, resp) {resp.writeHead(200, {'Content-Type': 'text/plain'});resp.end('Hello World!')}).listen(3000);`
|Code Length|19|22|92|160|

#### Best options for simplicity of text
PHP or Python by far!

### Simplicity of returning minute
 **Note:** Django is completly losing, and I have absolutly no django experience, so it will not be included in this step.
 
|-|PHP|Python|Node.js|
|---|---|---|---|
|Code|`<?php echo date("l");>`|`import datetime [line break] now = datetime.datetime.now() [line break] print now.minute`|`var http = require("http");http.createServer(function(reqst, resp) {resp.writeHead(200, {'Content-Type': 'text/plain'});var date = new date();resp.end(date.getMinutes())}).listen(3000);`|
|Code length|22|62|185|

#### Best option for simplicity of function
PHP wins this time!

### Winner!
PHP wins! And I already know how to code some PHP so I won't have to learn!
