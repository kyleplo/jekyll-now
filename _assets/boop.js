var boop, boop2;
window.addEventListener("load",function (){
 boop = new Image();
 boop.src = "https://kyleplo.com/_assets/boop.png";
 beep = new Image();
 beep.src = "https://kyleplo.com/_assets/beep.PNG";
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
function bop(s){
 if(s){boop.src = "https://kyleplo.com/_assets/beep.PNG"}else{boop.src = "https://kyleplo.com/_assets/boop.png"};
 boop.removeAttribute("hidden");
 boop2.play();
 setTimeout(function (){boop.setAttribute("hidden","hidden");},3000);
}
