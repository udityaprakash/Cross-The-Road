var gamescreen = document.getElementById("gamingscreen");
var count = 0;
var manindiv = 50;
var flipdiv = true;

var cars = [];
for (let i = 1; i <= 10; i++) {
  cars.push(`car${i}.png`);
}
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
function speedduration() {
  let s = Math.random() * 5;
  return s + 1;
}
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
function forwardmovement() {
  gamescreen.scrollTop -= 100;
  if (gamescreen.scrollTop < 1000) {
    gamescreen.innerHTML = '<div id="won">Wow You have Won the game</div>';
  }
}
function Backwardmovement() {
  if (gamescreen.scrollTop != gamescreen.scrollHeight)
    gamescreen.scrollTop += 100;
}
