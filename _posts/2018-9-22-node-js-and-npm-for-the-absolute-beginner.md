---
layout: post
title: Node.js and NPM for the absolute beginner.
categories: node npm javascript server
---

You might have heard of the things called Node.js and NPM. Node.js is a way to run JavaScript on a server, and NPM (Node Package Manager) is a website that keeps track of node code.

## Getting Started

First, [install Node.js on you computer](https://nodejs.org/en/download/). This will also install NPM. Now, let's make a simple website:

### Create file
Create a file called "index.js" and give it this content:
```javascript
var http = require('http');// load the http module, which lets you create websites

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-type':'text/html'});// set the response type and code
console.log("Page requested: " + req.url);// log to the console (log will appear in you terminal or command prompt)
  if(req.url.startsWith("/random")){// select a path
res.write('Random number from 1 to 10: ' + Math.ceil(Math.random() * 10));// write a response
}else if(req.url === "/"){
res.write('Hello World! This is the index file.');
}else if(req.url === "/html"){
res.write('<h1>Hello</h1>This is <b>an example with</b> HTML tags<br>Yay!');
}else{
res.write('404 Error');// this will run if none of the URLs match
}
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```
Open the terminal or command prompt, navigate to the folder with index.js, type `node index.js` and press enter. To stop your web server, press Ctrl + C

Finally, go to `localhost:8080` and try out the different paths. Play around with this file and try to make a really cool website.

### NPM

NPM, or Node Package Manager is a website that lets you view, reuse, and publish Node.js code. Each set of code is called a package, and can be fetched with the require command, like in the previous example.

To install a new package to your computer, navigate to the folder, type `npm install packageName` and press enter. If you type `npm install` without a package name, this will update all packages. Packages can be found on the [npm website](https://www.npmjs.com).

### Conclusion

I'm definitly not a Node.js expert, I just created this so you don't have to make the mistake I made. If you have any questions, comment below, but don't expect me to know the answer.
