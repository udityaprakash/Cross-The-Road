// alert("welcome to Cross the road Game.");
var gamescreen = document.querySelector("#gamingscreen");
var count=0;
function divgenerator(){
    for(let i=0;i<5;i++){
        count++;
        gamescreen.innerHTML+="<div>way for cars:"+count+"</div>";
    }
}
function Waygenerator(){
}