let resultatDeGauche = document.querySelector(".resultatDeGauche");
let resultatDeDroite = document.querySelector(".resultatDeDroite");
let btnRollDice = document.querySelector(".btnRd");
let boxDice = document.querySelector(".Dice");
let galerieImgDice = document.querySelectorAll(".imagesdé");
var img = document.createElement("img");

var min = 1;
var max = 6;

var random = Math.floor(Math.random() * (6 - 1)) + 1;
  galerieImgDice = galerieImgDice[random];

btnRollDice.addEventListener("click", function () {
  resultatDeDroite.innerHTML = (random);
  galerieImgDice.style.visibility ="visible";
});

for (var i = 0 ; i <galerieImgDice.length ; i++) {
  galerieImgDice [i].innerHTML= i
}

console.log(galerieImgDice[random]);
