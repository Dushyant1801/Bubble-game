var timer = 60;
var score = 0;
var clutter = "";
var rndm = 0;
var bubble = document.querySelector("#bubble");
var bottom = document.querySelector("#bottom");
function showbubbles(){
    for(var i=0; i<80; i++){
        clutter+=`<div id="bubble">
        <h1>${Math.floor(Math.random()*10)}</h1>
        </div>`
    }
    document.querySelector("#bottom").innerHTML = clutter;
}
showbubbles();
var h1 = document.querySelector("#h1")
function settimer(){
   setInterval(function(){
    if(timer<0){
        h1.innerHTML = `Game over <br> Your score is:${score}`;
        h1.style.display = "inline";
        bottom.style.display = "none"
    }
    else{
        document.querySelector("#time").innerHTML=timer;
        timer--;
    }
   },1000)
    
}
settimer();
function settinghit(){
    rndm=Math.floor(Math.random()*10);
    
    document.querySelector("#random").innerHTML=rndm;
}
function setscore(){
    score = score+10;
    document.querySelector("#score").innerHTML=score;
}
settimer();
settinghit();
bottom.addEventListener("click",function(dets){
    clutter="";
    showbubbles();
    var x = Number(dets.target.textContent);
    console.log(x);
    if(x===rndm){
        setscore();
        settinghit();
    }
})
