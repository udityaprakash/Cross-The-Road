var gamescreen = document.getElementById("gamingscreen");
var count=0;
for(let i=0;i<50;i++){
    count++;
    gamescreen.innerHTML+='<div>'+count+'</div><div></div>';
}
gamescreen.scrollTop = gamescreen.scrollHeight;
function forwardmovement(){
    gamescreen.scrollTop-=100;
    console.log(gamescreen.scrollTop);
    if(gamescreen.scrollTop < 1000){
        gamescreen.innerHTML='Wow You have Won the game';
    }
}
function Backwardmovement(){
    if(gamescreen.scrollTop != gamescreen.scrollHeight)
    gamescreen.scrollTop+=100;
    console.log(gamescreen.scrollTop);
}