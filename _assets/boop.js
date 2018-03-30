var boop, boop2;
document.addEventListener("load",function (){
 boop = new Image();
 boop.src = "https://kyleplo.github.io/_assets/boop.png";
 boop.id = "boop";
 boop.style.position = "fixed";
 boop.style.top = "50%";
 boop.style.left = "50%";
 boop.style.animation = "boop 3s infinite";
 document.body.appendChild(boop);
 boop.setAttribute("hidden","hidden");
 boop2 = new Audio();
 boop2.src = "https://kyleplo.github.io/_assets/boop.wav";
 if(localStorage.adfree === "-13"){
  bop();
 }
});
function bop(){
 boop.removeAttribute("hidden");
 boop2.play();
 setTimeout(function (){boop.setAttribute("hidden","hidden");},3000);
}
