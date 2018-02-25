var site = "https://kyleplo.github.io";
var target = "https://kyleplo.com";
window.addEventListener("load",function (){
window.parent.postMessage({action: "setTitle",data: document.title}, target);
var links = document.getElementsByTagName("a");
for(var i = 0;i < links.length;i++){
if(links[i].href.startsWith(site)){
links[i].addEventListener("click",function (e){
window.parent.postMessage({action: "pushState",data: e.target.href}, target);
setTimeout(function (){document.body.innerHTML = "<a href='" + site + "/" + e.target.href + "'>Click here</a>"},3000)
});
}else{
links[i].addEventListener("click",function (e){
e.preventDefault();
window.parent.postMessage({action: "external",data: e.target.href}, target);
setTimeout(function (){document.body.innerHTML = "<a href='" + e.target.href + "'>Click here</a>"},3000)
})
}}})
