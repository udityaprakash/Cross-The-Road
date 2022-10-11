var gamescreen = document.getElementById("gamingscreen");
var count = 0;
var manindiv=50;
var flipdiv = true;
var cars = [
  "cars1.png",
  "car2.png",
  "car3.png",
  "car4.png",
  "car5.png",
  "car6.png",
  "car7.png",
  "car8.png",
  "car9.png",
  "car10.png"
];
document.addEventListener("keypress", (event) => {
  switch (event.key) {
    case "w":
      forwardmovement();
      break;
    case "s":
      Backwardmovement();
      break;
    default:
      break;
  }
});

function cargenerator() {
  var i = Math.floor(Math.random() * 10);
  return cars[i];
}
function speedduration(){
    let s = Math.random() * 5;
    return s+1;
}
for (let i = 0; i < 50; i++) {
  count++;
  var car = cargenerator();
  gamescreen.innerHTML +='<div id="dive' + count + '"><img class="carimages" id="ima'+count+'" src="../Images/' + car + '"></div><div id="div'+ count +'"></div>';
    var speed = document.getElementById("ima"+count);
    speed.style.animationDuration = speedduration() + "s";

}
gamescreen.scrollTop = gamescreen.scrollHeight;
function forwardmovement() {
  gamescreen.scrollTop -= 100;
  if (gamescreen.scrollTop < 1000) {
    gamescreen.innerHTML = "Wow You have Won the game";
  }
  addmenindiv();
}
function Backwardmovement() {
  if (gamescreen.scrollTop != gamescreen.scrollHeight)
    gamescreen.scrollTop += 100;
}
function addmenindiv(){
  var mangrass = document.getElementById("div"+manindiv);
  var manroad = document.getElementById("dive"+manindiv);
  var dinoimage = document.getElementById("dino");
  if(flipdiv){
    if(manindiv!=50){
      dinoimage.innerHTML='';
    }
    mangrass.innerHTML+='<center><img id="dino" src="../Images/char1.png" height="80px"></center>';
    // var manback=document.getElementById("dive"+(manindiv-1));
    // manback.innerHTML='';
    flipdiv=false;
    
  }else{
    dinoimage.style.display='none';
    manroad.innerHTML+='<center><img id="dino" src="../Images/char1.png" height="80px"></center>';
    dinoimage.style.position='absolute';
    dinoimage.style.top='-100px';
    
    manindiv--;
    flipdiv=true;
  }
}
addmenindiv();