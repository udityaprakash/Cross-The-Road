var gamescreen = document.getElementById("gamingscreen");
var consolebtn = document.getElementById("console");
var crash = new Audio("../sounds/accident.mp3");
var begin = new Audio("../sounds/beginning.mp3");
var win = new Audio("../sounds/winning.mp3");
var roadleft = document.querySelector("#progress-bar span");
var maxwidth = window.innerWidth;
var characterposition = document.getElementById("character");
var charpos = parseInt(
  window.getComputedStyle(characterposition, null).getPropertyValue("left")
);
var y = charpos;
var chary = parseInt(
  window.getComputedStyle(characterposition, null).getPropertyValue("bottom")
);
var chardiv = document.getElementById("dropdown");
var scorediv = document.querySelector("#scorecard span");
var score = 0;
var count = 0;
var me = 90;
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
  "car10.png",
];
document.addEventListener("keypress", (event) => {
  if (consolebtn.style.display != "none") {
    switch (event.key) {
      case "w":
        forwardmovement();
        break;
      case "s":
        Backwardmovement();
        break;
      case "a":
        leftmovement();
        break;
      case "d":
        rightmovement();
        break;
      default:
        break;
    }
  }
});
document.querySelector("#gamingscreen").addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  },
  { passive: false }
);
function welcome() {
  begin.play();
}
function cargenerator() {
  var i = Math.floor(Math.random() * 10);
  return cars[i];
}
function speedduration() {
  let s = Math.random() * 3;
  return s + 1;
}
for (let i = 0; i < 55; i++) {
  count++;
  var car = cargenerator();
  gamescreen.innerHTML +=
    '<div id="dive' +
    count +
    '"><img class="carimages" id="ima' +
    count +
    '" src="../Images/' +
    car +
    '"></div><div id="div' +
    count +
    '"></div>';
  var speed = document.getElementById("ima" + count);
  speed.style.animationDuration = speedduration() + "s";
}
gamescreen.scrollTop = gamescreen.scrollHeight;
function forwardmovement() {
  chary = parseInt(window.getComputedStyle(characterposition,null).getPropertyValue('bottom'));
  if(chary>=260){
  gamescreen.scrollTop -= 100;
  }else{
    characterposition.style.bottom=(chary+100)+"px";
  }
  if (score >= 495) {
    win.play();
    gamescreen.innerHTML =
      '<div id="won">You Won<button id="retrybtn" onclick="relod()">Play Again</button></div>';
    consolebtn.style.display = "none";
    chardiv.style.display = "none";
    characterposition.style.display = "none";
    gamescreen.style.height = "100vh";
    clearInterval(le);
  }
  score += 5;
  scorediv.innerHTML = " " + score + "";
  if (flipdiv) {
    me = count;
    flipdiv = false;
  } else {
    count--;
    me = 90;
    flipdiv = true;
  }
}
function Backwardmovement() {
  if (score != 0){ 
    if(score<=10){
      chary = parseInt(window.getComputedStyle(characterposition,null).getPropertyValue('bottom'));
      characterposition.style.bottom=(chary-100)+"px";
    }else{
    gamescreen.scrollTop += 100;
    }
    score-=5;
    scorediv.innerHTML=" " +score+"";
    if(flipdiv){
      count++;
      me = count;
      flipdiv = false;
    } else {
      me = 90;
      flipdiv = true;
    }
  }
}
function relod() {
  window.location.reload();
}
var le = setInterval(()=>{
  charpos=parseInt(window.getComputedStyle(characterposition,null).getPropertyValue('left'));
  y=charpos;
  roadleft.innerHTML=(count-5);
  if(me!=90){
    carposition = document.querySelector("#ima"+me);
    carpos = parseInt(window.getComputedStyle(carposition,null).getPropertyValue('left'));
    let gap = carpos - charpos;
    if (gap < 70 && gap > -150) {
      clearInterval(le);
      crash.play();
      gamescreen.innerHTML =
        '<div id="won">Game Over<button id="retrybtn" onclick="relod()">Retry</button></div>';
      consolebtn.style.display = "none";
      chardiv.style.display = "none";
      characterposition.style.display = "none";
      gamescreen.style.height = "100vh";
    }
  }
}, 50);
function leftmovement() {
  if (charpos > 50 && charpos < maxwidth) {
    y = y - 10;
    characterposition.style.left = y + "px";
  }
}
function rightmovement(){
  if(charpos>30 && charpos< (maxwidth-120)){
    y=y+10;
    characterposition.style.left=y+"px";   
  }
}
function mycharacter() {
  document.getElementById("myDropdown").classList.toggle("show");
}
gamescreen.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
var char = ["char1.png", "char2.png","man1.png","man2.png"];
var charelement = document.getElementById("char");
function mychoice(choice) {
  charelement.setAttribute("src", "../Images/" + char[choice]);
  document.getElementById("myDropdown").classList.toggle("show");
}
