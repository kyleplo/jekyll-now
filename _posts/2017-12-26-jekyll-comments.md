---
layout: post
title: Jekyll Comments
categories: jekyll comments
---
As you may have noticed, today, there are now comments at the bottom of almost all the pages that allow you to comment! I have added these, they are not part of [Jekyll Now](https://github.com/barryclark/jekyll-now) (which I use). Here is how I made it:

First, create a file at `/_includes/comment.html`:
``` html
<div class="container"><h3>Leave a comment:</h3>
<input type="text" id="comment" oninput="var text= this.value.replace(/  /g,'+');document.getElementById('post').href='https://github.com/yourusername/youruseername.github.io/issues/new?title=Comment+for+' + location.pathname + ': ' + text.slice(0,10) + '&body=' + text;document.getElementById('msg').removeAttribute('hidden');">
<p id="msg" hidden>You will have to confirm the comment with your Github account. I may have to moderate your comment before displaying it on this page. Markdown is not supported.</p>
<a href="https://github.com/yourusername/yourusername.github.io/issues/new" id="post" target="_blank"><button>Post comment</button></a>
  <div id="comments"></div></div>
<script>
fetch("https://api.github.com/repos/yourusername/yourusername.github.io/issues?state=closed").then(function (r){return r.json();}).then(function (j){
console.log("Comments loaded!");
for(var i = 0;i < j.length;i++){
if(j[i].title.startsWith("Comment for " + location.pathname)){
var commentHtml = '<div class="comment">';
commentHtml += '<img width="50" height="50" src="' + j[i].user["avatar_url"] + '">';
commentHtml += '<p><a href="https://github.com/' + j[i].user["login"] + '">@' + j[i].user["login"] + '</a></p>';
commentHtml += '<p>' + j[i].body + '</p>';
if(j[i].comments > 0){commentHtml += '<p><a href="' + j[i]["html_url"] + '">See replies and reply</a></p>';console.log("Replies found.")}else{commentHtml += '<p><a href="' + j[i]["html_url"] + '">Be the first one to reply</a></p>'};
commentHtml += '</div>';
document.getElementById('comments').innerHTML += commentHtml;
console.log("Comment added");
}else{
console.log("Not relevant.");}}});
</script>
```

Next, replace all instances of `yourusername` with your Github username.

### Moderation
By default, comments must be closed to have them displayed. To disable that, on line 7, change `?state=closed` to `?state=all`.

### Replies
By default, others can reply to others posts. Replies do not use moderation. To disable replying, remove line 16.


To test it try commenting on this page:
