# jeux-de-DE-javascript




pour commencer je cree un cadrant diviser en  deux pour chaque joueur , 
rajoute les bouttons players 1 et 2 
boutton new game
boutton ROLL DICE 
boutton HOLDE 
des boxs  pour centrer les bouttons et  des affichages
currents et resultas globals tous sa en HTML et CSS.

en Javascript, je sélectionne tous les éléments et boutons sur les quel je vais cree un événement.
je cree des boutons ( player 1 et player 2) avec une fonction anonyme qui cree un événement avec (addeventlistener ("click", function() {}) ) pour prendre la main sur le lancer du DE .quand ils sont visibles le cercle est actif et inactif quand ils sont hidden

pour affiche le resultat du CURRENT 
je cree un boutton ROLL DICE avec une fonction anonyme (addeventlistener ("click", function() {}}) )  qui se déclenche au click il  crée un événement, pour lancer l'affichage  d'une image de DE, l'image du DE sera associée  à un chiffre altenitf avec  la méthode Math random() ( un chiffre en 1 et 6)..
le chiffre alternatif serra le même chiffre du résultat du DE, qui sera envoyé avec la méthode push() dans le tableau tab Current1 pour player1 et Tab Current2 pour le player 2 pour être additione à chaque click du boutton ROLL DICE
avec les conditon 
si la galerie images dé est visible 
si cercle1 est visible 
afficher l'addition tabeau  tabCurrent1 dans CURRENT
si images dé 1 est visible 
alert("pas de chance DE 1 sortie (fin du  tour et score remis à 0)");
tabCurrent1 et tabCurrent2 mis a zero 
cercle1 devien hidden et cercle 2 visible 
si cercle2 est visible 
afficher l'addition tabCurrent2 dans CURRENT
si images dé 1 est visible 
alert("pas de chance DE 1 sortie (fin du  tour et score remis à 0)");
tabCurrent1 et tabCurrent2 mis a zero 
cercle2 devien hidden et cercle 1 visible 

pour le boutton HOLD 
l'addition des CURRENTS
les tableaus  tabCurrent1 et tabCurrent2  sont envoyer avce la mothode push() 
au click du boutton HOLD
tabCurrent1 pour ARR et tabCurrent2 pour ARR2 lest resultats CURRENTS sont 
additionne et affiché dans resultat GLOBLAL .
je cree le  boutton HOLD avec une fonction anonyme (addEventListener ("click", function () {}) )  qui se declenche au click il  crée un evenement , 
si le  cercle 1 est visible 
le resultat afficher dans CURRENT player1 est envoyer  dans le tableau ARR pour etre additioner 
le tableau tabCurrent2  est mis a zreo apres le click
il affiche le l'addition du tableau ARR 
cercle 1 deviens HIDDEEN
cercle 2 devien VISIBLE
si le  cercle 2 est visible 
le resultat afficher dans CURRENT player2 est envoyer  dans le tableau ARR2 pour etre additioner 
le tableau tabCurrent1  est mis a zreo apres le click
il affiche le l'addition du tableau ARR2 
cercle 1 deviens VISIBLE
cercle 2 devien HIDDEN


et un boutton NEW GAME 
crre une fonction  onclick=" Refresh()
qui vas juste rafrechir la page et tous remettre a zero 
avce un alerte ("cliquer sur player 1 ou 2 pour commencer")
 

