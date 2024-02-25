// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
document.querySelector(".message").textContent = "Correct Number 🥳";
document.querySelector(".number").textContent = "15";
document.querySelector(".score").textContent = "17";
document.querySelector(".guess").value = 2;
console.log(document.querySelector(".guess").value);
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("🧐 No Number");
  } else if (guess === number) {
    displayMessage("Correct Number 🥳");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "240px";
    document.querySelector(".number").textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "📈Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(" You Lost!☠️");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#fa5252";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "120px";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  score = 10;
  document.querySelector(".score").textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
});
