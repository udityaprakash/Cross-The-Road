var gamescreen = document.getElementById("gamingscreen");
var consolebtn = document.getElementById("console");
var crash = new Audio("../sounds/accident.mp3");
var begin = new Audio("../sounds/beginning.mp3");
var win = new Audio("../sounds/winning.mp3");
var maxwidth = window.innerWidth;
console.log;
var characterposition = document.querySelector("#character");
var charpos = parseInt(
  window.getComputedStyle(characterposition, null).getPropertyValue("left")
);
var y = charpos;
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
const welcome = () => {
  begin.play();
};
const cargenerator = () => {
  var i = Math.floor(Math.random() * 10);
  return cars[i];
};
const speedduration = () => {
  let s = Math.random() * 3;
  return s + 1;
};
for (let i = 0; i < 50; i++) {
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
forwardmovement = () => {
  gamescreen.scrollTop -= 100;
  if (gamescreen.scrollTop < 1000) {
    win.play();
    gamescreen.innerHTML =
      '<div id="won">You Won<button id="retrybtn" onclick="relod()">Play Again</button></div>';
    consolebtn.style.display = "none";
    characterposition.style.display = "none";
    gamescreen.style.height = "100vh";
    clearInterval(le);
  }
  if (flipdiv) {
    me = count;
    count--;
    flipdiv = false;
  } else {
    me = 90;
    flipdiv = true;
  }
};
const Backwardmovement = () => {
  if (gamescreen.scrollTop != gamescreen.scrollHeight) {
    gamescreen.scrollTop += 100;
    if (flipdiv) {
      me = count;
      flipdiv = false;
    } else {
      me = 90;
      count++;
      flipdiv = true;
    }
  }
};
const relod = () => {
  window.location.reload();
  welcome();
};
var le = setInterval(() => {
  charpos = parseInt(
    window.getComputedStyle(characterposition, null).getPropertyValue("left")
  );
  y = charpos;
  if (me != 90) {
    carposition = document.querySelector("#ima" + me);
    const carpos = parseInt(
      window.getComputedStyle(carposition, null).getPropertyValue("left")
    );
    let gap = carpos - charpos;
    if (gap < 70 && gap > -150) {
      clearInterval(le);
      crash.play();
      gamescreen.innerHTML =
        '<div id="won">Game Over<button id="retrybtn" onclick="relod()">Retry</button></div>';
      consolebtn.style.display = "none";
      characterposition.style.display = "none";
      gamescreen.style.height = "100vh";
    }
  }
}, 100);
const leftmovement = () => {
  if (charpos > 50 && charpos < maxwidth) {
    y = y - 10;
    characterposition.style.left = y + "px";
  }
};
const rightmovement = () => {
  if (charpos > 30 && charpos < maxwidth - 120) {
    y = y + 10;
    characterposition.style.left = y + "px";
  }
};
