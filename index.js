
document.getElementById("entername").onclick=function()

{
  var namestr;
  namestr=document.getElementById("name").value ;
  document.getElementById("display").innerHTML="Hi"+" "+namestr+"!" +" "+"Welcome to Dice Game.";

}
let x=document.getElementById("name").onfocus=function()
{
    x.style.color="pink";
}
//for  player one
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 we want a 0.99999... to 0.599999 so we multiply by 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png


var image1 = document.querySelectorAll("img")[0]; //array start from 0


image1.setAttribute("src", randomImageSource);

// for player  two
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//when user click on the refresh page the winner will annouced  otherwise it's draw !
//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";  //h1 tag
}
//if player 2 win
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"; //h1 tag
}
//if it is draw.
else {
  document.querySelector("h1").innerHTML = "Draw!"; //h1 tag
}
