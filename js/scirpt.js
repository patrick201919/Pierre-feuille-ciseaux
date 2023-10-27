let imgChoices = ["pierre.png", "feuille.png", "ciseaux.png"];

const containerPart = document.querySelector(".containerPart");
const ClassPlayerChoices = document.querySelectorAll(".ClassPlayerChoiceImg");
const playerChoiceId = document.getElementById("playerChoiceId");
const computerChoiceId = document.getElementById("computerChoiceId");
const pierre = document.getElementById("idPierre").getAttribute("src");
const feuille = document.getElementById("idFeuille").getAttribute("src");
const ciseaux = document.getElementById("idSiceaux").getAttribute("src");
const scoreComputerClass = document.querySelector(".scoreComputer");
const scorePlayerClass = document.querySelector(".scorePlayer");
const resetAllElt = document.getElementById("resetAll");
let scorePlayer = 0;
let scoreComputer = 0;

ClassPlayerChoices.forEach((ClassPlayerChoice) => {
  ClassPlayerChoice.addEventListener("click", () => {
    let playerChoice = ClassPlayerChoice.getAttribute("src");
    playerChoiceId.setAttribute("src", playerChoice);
    let computerIndex = Math.floor(Math.random() * imgChoices.length);
    let computerImg = imgChoices[computerIndex];
    computerChoiceId.setAttribute("src", "assets/media/" + computerImg);
    let computerChoice = computerChoiceId.getAttribute("src");

    function choice() {
      const playerPopFace = document.createElement("div");
      const playerPopFace1 = document.createElement("div");
      const playerPopFace2 = document.createElement("div");
      const playerPopFace3 = document.createElement("div");
      containerPart.appendChild(playerPopFace);
      playerPopFace.append(playerPopFace3, playerPopFace1, playerPopFace2);
      playerPopFace.classList.add("playerPopFace");
      playerPopFace1.classList.add("playerPopFace1");
      playerPopFace2.classList.add("playerPopFace2");

      if (playerChoice === computerChoice) {
        playerPopFace1.innerHTML = "Null";
      } else if (playerChoice === pierre && computerChoice === ciseaux) {
        scorePlayer++;
        playerPopFace1.innerHTML =
          "Gagné" +
          " , LYAH " +
          "vous " +
          " : " +
          scorePlayer +
          " Computer : " +
          scoreComputer;
      } else if (playerChoice === feuille && computerChoice === pierre) {
        scorePlayer++;
        playerPopFace1.innerHTML =
          "Gagné" +
          " , LYAH " +
          "vous " +
          " : " +
          scorePlayer +
          " Computer : " +
          scoreComputer;
      } else if (playerChoice === ciseaux && computerChoice === feuille) {
        scorePlayer++;
        playerPopFace1.innerHTML =
          "Gagné" +
          " , LYAH " +
          "vous " +
          " : " +
          scorePlayer +
          " Computer : " +
          scoreComputer;
      } else {
        scoreComputer++;
        playerPopFace1.innerHTML =
          "Perdu Computer " + ": " + scoreComputer + " LYAH ";

        scorePlayer;
      }

      function playerPop() {
        playerPopFace.addEventListener("click", () => {
          playerPopFace.classList.add("displayNone");
        });
      }
      playerPop();

      scorePlayerClass.innerHTML = scorePlayer;
      scoreComputerClass.innerHTML = scoreComputer;
      // compteur après 3 manche
      function counter() {
        let counterPlayer = document.getElementById("counterPlayer");
        let counterComputer = document.getElementById("counterComputer");

        if (scorePlayer == 3) {
          scorePlayer = 0;
          scoreComputer = 0;
          scoreComputerClass.innerHTML = 0;
          scorePlayerClass.innerHTML = 0;
          counterPlayer.innerHTML++;
          playerPopFace3.classList.add("playerPopFace3");
          playerPopFace1.classList.add("playerPopFace1");
          playerPopFace2.classList.add("playerPopFace2");
          playerPopFace1.innerHTML =
            "Bravo LYAH vous avez " +
            counterPlayer.innerHTML +
            " victoire(s) " +
            "et " +
            "Computer " +
            counterComputer.innerHTML;
        } else if (scoreComputer == 3) {
          scorePlayer = 0;
          scoreComputer = 0;
          scoreComputerClass.innerHTML = 0;
          scorePlayerClass.innerHTML = 0;
          counterComputer.innerHTML++;
          playerPopFace3.classList.add("playerPopFace3");
          playerPopFace1.classList.add("playerPopFace1");
          playerPopFace2.classList.add("playerPopFace2");
          playerPopFace1.innerHTML =
            "Essayez encore, " +
            counterComputer.innerHTML +
            " victoire(s) Computer et vous " +
            counterPlayer.innerHTML;
        }
      }
      counter();
    }
    choice();
  });
});
function reset() {
  resetAllElt.addEventListener("click", () => {
    location.reload();
  });
}
reset();
