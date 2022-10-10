var gamescreen = document.getElementById("gamingscreen");
var count = 0;
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
for (let i = 0; i < 50; i++) {
  count++;
  var car = cargenerator();
  console.log(count, car);
  gamescreen.innerHTML +=
    "<div>" +
    count +
    '<img class="carimages" src="../Images/' +
    car +
    '"></div><div></div>';
}
gamescreen.scrollTop = gamescreen.scrollHeight;
function forwardmovement() {
  gamescreen.scrollTop -= 100;
  console.log(gamescreen.scrollTop);
  if (gamescreen.scrollTop < 1000) {
    gamescreen.innerHTML = "Wow You have Won the game";
  }
}
function Backwardmovement() {
  if (gamescreen.scrollTop != gamescreen.scrollHeight)
    gamescreen.scrollTop += 100;
  console.log(gamescreen.scrollTop);
}
