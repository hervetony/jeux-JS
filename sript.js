let resultatplayer1 = document.querySelector(".resultatplayer1");
let resultatplayer2 = document.querySelector(".resultatplayer2");
let chiffreresultatplayer2 = document.querySelector(".chiffreresultatplayer2");
let chiffreresultatplayer1 = document.querySelector(".chiffreresultatplayer1");
let prendrelamainplayer1 = document.querySelector(".player1");
let prendrelamainplayer2 = document.querySelector(".player2");
let cercleplayer2 = document.querySelector(".cercleplayer2");
let cercleplayer1 = document.querySelector(".cercleplayer1");
let btnRollDice = document.querySelector(".btnRd");
let boxDice = document.querySelector(".Dice");
let galerieImgDice = document.querySelectorAll(".imagesdé");
let btnRollDice2 = document.querySelector(".action-button");
let imagesdé1 = document.querySelector("#imagesdé1");
let btnhold = document.querySelector(".btnHo");
let btnNewGame = document.querySelector(".btnNg");

alert(
  "cliquer sur player 1 ou 2 pour commencer le tour du player choisie, appuyer sur ROLL DICE pour lancer le DE et hold pour garder le resultat, si le DE 1 sort le score current est perdu et c’est la fin du tour, le premier joueur qui atteint 100 points gagne!!!!"
);

// predre la main pour lancer le DE (debut) *************************
prendrelamainplayer1.addEventListener("click", function () {
  cercleplayer1.style.visibility = "visible";
  cercleplayer2.style.visibility = "hidden";
});

prendrelamainplayer2.addEventListener("click", function () {
  cercleplayer1.style.visibility = "hidden";
  cercleplayer2.style.visibility = "visible";
});
// predre la main pour lancer le DE (fin) *************************

// tableau score current DE (debut)*************************
var tabCurrent1 = [];
var reducer = (accumulator, curr) => accumulator + curr;
var tabCurrent2 = [];
var reducer = (accumulator, curr) => accumulator + curr;
// tableau score current DE (fin)*************************

// boutton lancer le DE (debut) *************************
btnRollDice.addEventListener("click", function () {
  var random = Math.floor(Math.random() * 6) + 1;
  galerieImgDice.forEach((img) => {
    if (img.style.visibility === "visible") {
      img.style.visibility = "hidden";
    }
  });

  // env random dans le tableau  pour current  (debut) *************************
  var count = tabCurrent1.push(random);
  var count = tabCurrent2.push(random);
  // env random dans le tableau  pour current   (fin) *************************

  galerieImgDice[random].style.visibility = "visible";
  if (cercleplayer1.style.visibility === "visible") {
    chiffreresultatplayer1.innerHTML = tabCurrent1.reduce(reducer);
    if (imagesdé1.style.visibility === "visible") {
      alert("pas de chance DE 1 sortie (fin du  tour et score remis à 0)");
      var count = tabCurrent1.push(-tabCurrent1.reduce(reducer));
      var count = tabCurrent2.push(-tabCurrent2.reduce(reducer));
      chiffreresultatplayer1.innerHTML = 0;
      cercleplayer1.style.visibility = "hidden";
      cercleplayer2.style.visibility = "visible";
    }
  } else if (cercleplayer2.style.visibility === "visible") {
    chiffreresultatplayer2.innerHTML = tabCurrent2.reduce(reducer);
    cercleplayer1.style.visibility = "hidden";
    if (imagesdé1.style.visibility === "visible") {
      alert("pas de chance DE 1 sortie (fin du  tour et score remis à 0)");
      var count = tabCurrent1.push(-tabCurrent1.reduce(reducer));
      var count = tabCurrent2.push(-tabCurrent2.reduce(reducer));
      chiffreresultatplayer2.innerHTML = 0;
      cercleplayer2.style.visibility = "hidden";
      cercleplayer1.style.visibility = "visible";
    }
  }
});

// boutton lancer le DE (fin) ************************

//tableau addition current scores (debut) *************************
const arr2 = [];
var reducer = (accumulator, curr) => accumulator + curr;

const arr = [];
var reducer = (accumulator, curr) => accumulator + curr;
//tableau addition current scores (fin ) *************************

//boutton  hold (debut) *************************
btnhold.addEventListener("click", function () {
  if (cercleplayer1.style.visibility === "visible") {
    var count = arr.push(
      (chiffreresultatplayer1.innerHTML = tabCurrent1.reduce(reducer))
    );
    var count = tabCurrent2.push(-tabCurrent2.reduce(reducer));
    chiffreresultatplayer1.innerHTML = 0;
    resultatplayer1.innerHTML = arr.reduce(reducer);
    cercleplayer1.style.visibility = "hidden";
    cercleplayer2.style.visibility = "visible";
    alert("tour joueur 2");
  } else if (cercleplayer2.style.visibility === "visible") {
    var count = arr2.push(
      (chiffreresultatplayer2.innerHTML = tabCurrent2.reduce(reducer))
    );
    var count = tabCurrent1.push(-tabCurrent1.reduce(reducer));
    chiffreresultatplayer2.innerHTML = 0;
    resultatplayer2.innerHTML = arr2.reduce(reducer);
    cercleplayer1.style.visibility = "visible";
    cercleplayer2.style.visibility = "hidden";
    alert("tour joueur 1");
  }
});
//boutton  hold (fin) *************************

// function Refresh page (debut) *************************
function Refresh() {
  window.parent.location = window.parent.location.href;
  alert("cliquer sur player 1 ou 2 pour commencer");
}
// function Refresh page (fin) *************************
