//DEFINITION DES VARIABLES
let globalScoreOneDisplay = document.getElementById("global-score-one");
let globalScoreTwoDisplay = document.getElementById("global-score-two");
let roundScoreOneDisplay = document.getElementById("round-score-one");
let roundScoreTwoDisplay = document.getElementById("round-score-two");

let diceDisplay = document.getElementById("dice");
let diceNumber = 0;
let message = document.getElementById("message");

let globalScoreOne = 0;
let globalScoreTwo = 0;
let roundScoreOne = 0;
let roundScoreTwo = 0;

let newGameBtn = document.getElementById("new-game-btn");
let rollDiceBtn = document.getElementById("roll-dice-btn");
let holdBtn = document.getElementById("hold-btn");
let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");
let playerOne = true;

let boxOne = document.getElementById("box-one");
let boxTwo = document.getElementById("box-two");
let boxThree = document.getElementById("box-three");
let boxFour = document.getElementById("box-four");
let boxFive = document.getElementById("box-five");
let boxSix = document.getElementById("box-six");
let boxSeven = document.getElementById("box-seven");
let boxEight = document.getElementById("box-eight");
let boxNine = document.getElementById("box-nine");

let boxOneChildren = boxOne.children[0];
let boxTwoChildren = boxTwo.children[0];
let boxThreeChildren = boxThree.children[0];
let boxFourChildren = boxFour.children[0];
let boxFiveChildren = boxFive.children[0];
let boxSixChildren = boxSix.children[0];
let boxSevenChildren = boxSeven.children[0];
let boxEightChildren = boxEight.children[0];
let boxNineChildren = boxNine.children[0];

let redDotPlayerOne = document.getElementById("redDotOne");
let redDotPlayerTwo = document.getElementById("redDotTwo");

let playerOneDiv = document.getElementById("player-one");
let playerTwoDiv = document.getElementById("player-two");

//DEFINITION ALEATOIRE DE LA VALEUR DU DÉ
diceNumber = Math.floor(Math.random() * 6 + 1);

//AFFICHAGE DES SCORES PAR DEFAUT EN DEBUT DE PARTIE
globalScoreOneDisplay.innerText = globalScoreOne;
globalScoreTwoDisplay.innerText = globalScoreTwo;
roundScoreOneDisplay.innerText = roundScoreOne;
roundScoreTwoDisplay.innerText = roundScoreTwo;

//Message de victoire non affiché par défaut
message.style.display = "none";
yesBtn.style.display = "none";
noBtn.style.display = "none";

//LE PLAYER 1 JOUE EN PREMIER PAR DEFAUT
redDotPlayerOne.style.display = "inline";
redDotPlayerTwo.style.display = "none";

//AFFICHAGE DE LA VALEUR PAR DEFAUT (6) SUR LE DÉ
boxOneChildren.style.display = "block";
boxTwoChildren.style.display = "none";
boxThreeChildren.style.display = "block";
boxFourChildren.style.display = "block";
boxFiveChildren.style.display = "none";
boxSixChildren.style.display = "block";
boxSevenChildren.style.display = "block";
boxEightChildren.style.display = "none";
boxNineChildren.style.display = "block";

//ON DEFINIT LA FONCTION DE REINITIALISATION DES SCORES
const resetGame = () => {
  globalScoreOne = 0;
  globalScoreTwo = 0;
  roundScoreOne = 0;
  roundScoreTwo = 0;
  globalScoreOneDisplay.innerText = globalScoreOne;
  globalScoreTwoDisplay.innerText = globalScoreTwo;
  roundScoreTwoDisplay.innerText = roundScoreTwo;
  roundScoreOneDisplay.innerText = roundScoreOne;
  playerOneDiv.style.display = "block";
  playerTwoDiv.style.display = "block";
  holdBtn.style.display = "flex";
  rollDiceBtn.style.display = "flex";
  boxOneChildren.style.display = "block";
  boxTwoChildren.style.display = "none";
  boxThreeChildren.style.display = "block";
  boxFourChildren.style.display = "block";
  boxFiveChildren.style.display = "none";
  boxSixChildren.style.display = "block";
  boxSevenChildren.style.display = "block";
  boxEightChildren.style.display = "none";
  boxNineChildren.style.display = "block";
  diceDisplay.style.display = "grid";
  rollDiceBtn.style.display = "flex";
  holdBtn.style.display = "flex";
};

//ON MASQUE LES JOUEURS ET LE DE SI LES JOUEURS NE SOUHAITENT PLUS REJOUER
const hideGame = () => {
  playerOneDiv.style.display = "none";
  playerTwoDiv.style.display = "none";
  holdBtn.style.display = "none";
  rollDiceBtn.style.display = "none";
  diceDisplay.style.display = "none";
  message.style.display = "none";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
};

//LANCEMENT DU DÉ AU CLIC
rollDiceBtn.addEventListener("click", () => {
  diceDisplay.innerHTML = "";
  diceNumber = Math.floor(Math.random() * 6 + 1);
  console.log(diceNumber);
  diceDisplay.append(
    boxOne,
    boxTwo,
    boxThree,
    boxFour,
    boxFive,
    boxSix,
    boxSeven,
    boxEight,
    boxNine
  );

  //LE DÉ AFFICHE LE NOMBRE ALEATOIRE DEFINIT PAR 'DICENUMBER'
  switch (diceNumber) {
    case 1:
      boxOneChildren.style.display = "none";
      boxTwoChildren.style.display = "none";
      boxThreeChildren.style.display = "none";
      boxFourChildren.style.display = "none";
      boxFiveChildren.style.display = "block";
      boxSixChildren.style.display = "none";
      boxSevenChildren.style.display = "none";
      boxEightChildren.style.display = "none";
      boxNineChildren.style.display = "none";
      break;
    case 2:
      boxOneChildren.style.display = "block";
      boxTwoChildren.style.display = "none";
      boxThreeChildren.style.display = "none";
      boxFourChildren.style.display = "none";
      boxFiveChildren.style.display = "none";
      boxSixChildren.style.display = "none";
      boxSevenChildren.style.display = "none";
      boxEightChildren.style.display = "none";
      boxNineChildren.style.display = "block";
      break;
    case 3:
      boxOneChildren.style.display = "block";
      boxTwoChildren.style.display = "none";
      boxThreeChildren.style.display = "none";
      boxFourChildren.style.display = "none";
      boxFiveChildren.style.display = "block";
      boxSixChildren.style.display = "none";
      boxSevenChildren.style.display = "none";
      boxEightChildren.style.display = "none";
      boxNineChildren.style.display = "block";
      break;
    case 4:
      boxOneChildren.style.display = "block";
      boxTwoChildren.style.display = "none";
      boxThreeChildren.style.display = "block";
      boxFourChildren.style.display = "none";
      boxFiveChildren.style.display = "none";
      boxSixChildren.style.display = "none";
      boxSevenChildren.style.display = "block";
      boxEightChildren.style.display = "none";
      boxNineChildren.style.display = "block";
      break;
    case 5:
      boxOneChildren.style.display = "block";
      boxTwoChildren.style.display = "none";
      boxThreeChildren.style.display = "block";
      boxFourChildren.style.display = "none";
      boxFiveChildren.style.display = "block";
      boxSixChildren.style.display = "none";
      boxSevenChildren.style.display = "block";
      boxEightChildren.style.display = "none";
      boxNineChildren.style.display = "block";
      break;
    case 6:
      boxOneChildren.style.display = "block";
      boxTwoChildren.style.display = "none";
      boxThreeChildren.style.display = "block";
      boxFourChildren.style.display = "block";
      boxFiveChildren.style.display = "none";
      boxSixChildren.style.display = "block";
      boxSevenChildren.style.display = "block";
      boxEightChildren.style.display = "none";
      boxNineChildren.style.display = "block";
      break;

    default:
      console.log("Erreur");
      break;
  }

  //ON DEFINIT LE SCORE DU ROUND
  if (playerOne) {
    //PLAYER 1
    holdBtn.style.display = "flex";
    redDotPlayerOne.style.display = "inline";
    redDotPlayerTwo.style.display = "none";
    if (diceNumber === 1) {
      roundScoreOne = 0;
      roundScoreOneDisplay.innerText = roundScoreOne;
      holdBtn.style.display = "none";
      playerOne = false;
    } else {
      roundScoreOne += diceNumber;
      roundScoreOneDisplay.innerText = roundScoreOne;
    }
  } else {
    //PLAYER 2
    holdBtn.style.display = "flex";
    redDotPlayerOne.style.display = "none";
    redDotPlayerTwo.style.display = "inline";
    if (diceNumber === 1) {
      roundScoreTwo = 0;
      roundScoreTwoDisplay.innerText = roundScoreTwo;
      holdBtn.style.display = "none";
      playerOne = true;
    } else {
      roundScoreTwo += diceNumber;
      roundScoreTwoDisplay.innerText = roundScoreTwo;
    }
  }
});

// ON CONSERVE LE SCORE DU ROUND DANS LE SCORE GLOBAL
holdBtn.addEventListener("click", () => {
  if (playerOne) {
    redDotPlayerOne.style.display = "none";
    redDotPlayerTwo.style.display = "inline";
    globalScoreOne += roundScoreOne;
    globalScoreOneDisplay.innerText = globalScoreOne;
    roundScoreOne = 0;
    roundScoreOneDisplay.innerText = roundScoreOne;
    playerOne = false;
    if (globalScoreOne >= 100) {
      globalScoreOneDisplay.innerText = "100";
      message.innerHTML =
        "<p>Vous avez gagné player 1 !!! Voulez-vous rejouer ?<p>";
      message.style.display = "inline";
      yesBtn.style.display = "inline";
      noBtn.style.display = "inline";
      rollDiceBtn.style.display = "none";
      holdBtn.style.display = "none";
      yesBtn.addEventListener("click", () => {
        resetGame();
        message.style.display = "none";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });
      noBtn.addEventListener("click", hideGame);
    }
  } else {
    redDotPlayerOne.style.display = "inline";
    redDotPlayerTwo.style.display = "none";
    globalScoreTwo += roundScoreTwo;
    globalScoreTwoDisplay.innerText = globalScoreTwo;
    roundScoreTwo = 0;
    roundScoreTwoDisplay.innerText = roundScoreTwo;
    playerOne = true;
    if (globalScoreTwo >= 100) {
      globalScoreTwoDisplay.innerText = "100";
      message.innerHTML =
        "<p>Vous avez gagné player 2 !!! Voulez-vous rejouer ?<p>";
      message.style.display = "inline";
      yesBtn.style.display = "inline";
      noBtn.style.display = "inline";
      rollDiceBtn.style.display = "none";
      holdBtn.style.display = "none";
      yesBtn.addEventListener("click", () => {
        resetGame();
        message.style.display = "none";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });
      noBtn.addEventListener("click", hideGame);
    }
  }
});

//ON REDÉMARRE UNE PARTIE
newGameBtn.addEventListener("click", () => {
  resetGame();
});
