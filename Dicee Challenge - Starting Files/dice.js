function changeImage(){
    var x=Math.floor(Math.random()*6+1);
var y=Math.floor(Math.random()*6+1);
var RandomDiceImage="images/dice" + x + ".png";
var RandomDiceImage2="images/dice" + y + ".png";
console.log(x);
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", RandomDiceImage);
image2.setAttribute("src", RandomDiceImage);

if(x>y){
    var winText= " Player 1 wins";
}
else{
    var winText= " Player 2 wins";
}

document.querySelector("h1").textContent=winText;
}
