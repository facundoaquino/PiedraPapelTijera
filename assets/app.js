const $main = document.querySelector(".main");
const $go = document.querySelector("#go");
const $pplayer = document.querySelector(".player__points");
const $pcomputer = document.querySelector(".computer__points");
const $choicePlayer0 = document.querySelector(".op0");
const $choicePlayer1 = document.querySelector(".op1");
const $choicePlayer2 = document.querySelector(".op2");
const $choiceComputer0 = document.querySelector(".oc0");
const $choiceComputer1 = document.querySelector(".oc1");
const $choiceComputer2 = document.querySelector(".oc2");
const $playerPoints = document.querySelector(".player__points");
const $computerPoints = document.querySelector(".computer__points");
const $winer = document.querySelector(".winer");
const $loser = document.querySelector(".loser");

let playerPoints = 0;
let computerPoints = 0;
let playerChoise = 0;
let computerChoise = 0;
//0 piedra 1 papel 2 tijera
//generar numeros aleatorios de 0 a 2 ( van a ser las 3 opciones de priedra papel o tijera respectivamente)
const getRandom = () => {
  return Math.floor(Math.random() * 3);
};

const turnComputer = () => {
  computerChoise = getRandom();
  document.querySelector(`.oc${computerChoise}`).style.filter = "opacity(1)";
  if (playerChoise == 0 && computerChoise == 0) {
    // $choiceComputer0.style.filter = "opacity(1)";
  } else if (
    (playerChoise == 1 && computerChoise == 0) ||
    (playerChoise == 0 && computerChoise == 2) ||
    (playerChoise == 2 && computerChoise == 1)
  ) {
    playerPoints++;
    $playerPoints.innerHTML = playerPoints;
  } else if (
    (playerChoise == 2 && computerChoise == 0) ||
    (playerChoise == 0 && computerChoise == 1) ||
    (playerChoise == 1 && computerChoise == 2)
  ) {
    computerPoints++;
    $computerPoints.innerHTML = computerPoints;
  }
  setTimeout(() => {
    document.querySelector(`.oc${computerChoise}`).style.filter = "";
  }, 2000);
  setTimeout(() => {
    if (playerPoints == 2) {
      $winer.style.display = "block";
    } else if (computerPoints == 2) {
      $loser.style.display = "block";
    }
  }, 500);
};

const mainEnabled = () => {
  $main.style.display = "flex";
};

$go.addEventListener("click", () => {
  $go.disabled = true;
  mainEnabled();
});

$choicePlayer0.addEventListener("click", () => {
  $choicePlayer0.style.transform = "scale(2)";
  $choicePlayer1.style.transform = "scale(0)";
  $choicePlayer2.style.transform = "scale(0)";
  playerChoise = 0;
  turnComputer();
  setTimeout(() => {
    $choicePlayer0.style.transform = ""; // setea por defecto la propiedad transform con ""

    $choicePlayer1.style.transform = "";
    $choicePlayer2.style.transform = "";
  }, 2000);
});

$choicePlayer1.addEventListener("click", () => {
  $choicePlayer0.style.transform = "scale(0)";
  $choicePlayer1.style.transform = "scale(2)";
  $choicePlayer2.style.transform = "scale(0)";
  playerChoise = 1;

  turnComputer();
  setTimeout(() => {
    $choicePlayer0.style.transform = ""; // setea por defecto la propiedad transform con ""

    $choicePlayer1.style.transform = "";
    $choicePlayer2.style.transform = "";
  }, 2000);
});

$choicePlayer2.addEventListener("click", () => {
  $choicePlayer0.style.transform = "scale(0)";
  $choicePlayer1.style.transform = "scale(0)";
  $choicePlayer2.style.transform = "scale(2)";
  playerChoise = 2;

  turnComputer();
  setTimeout(() => {
    $choicePlayer0.style.transform = ""; // setea por defecto la propiedad transform con ""

    $choicePlayer1.style.transform = "";
    $choicePlayer2.style.transform = "";
  }, 2000);
});
