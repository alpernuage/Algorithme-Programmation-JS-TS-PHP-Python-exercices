let containerScreen1 = document.getElementById("screen1");
let containerScreen2 = document.getElementById("screen2");
let letterDisplay = document.getElementById("letterDisplay");
let startGame = document.getElementById("startGame");
let randomLetter = String.fromCharCode(Math.floor((Math.random() * 25) + 97));
let countdownNumber = document.getElementById('countdown-number');
let countdown = 3;

let score = 0;

//Créations d'éléments
let scoreElement = document.createElement("p");
scoreElement.textContent = "Score: " + score;
scoreElement.className = "score"
let scoreDisplay = document.getElementById("scoreDisplay");
let letterElement = document.createElement("p");
letterElement.textContent = randomLetter;
letterElement.id = "letterElement";

//Début
scoreDisplay.appendChild(scoreElement);
letterDisplay.appendChild(letterElement)
startGame.addEventListener("click", function () {
  containerScreen1.style.display = "none";
  containerScreen2.style.display = "block";
  countdownNumber.textContent = countdown;

  setInterval(function () {
    countdown = --countdown < 0 ? 3 : countdown;
    /* condition ? a:b
équivalent de if(condition) {a} else {b}*/


    countdownNumber.textContent = countdown;
    if (countdown == 0) {
      alert("Dommage ! Vous avez " + score + " points.")
      document.location.reload(true);
    }
  }, 1000);
  document.addEventListener("keydown", function () {
    if (event.key == randomLetter) {
      score++;
      scoreElement.textContent = "Score: " + score;
      randomLetter = String.fromCharCode(Math.floor((Math.random() * 25) + 97));
      letterElement.textContent = randomLetter
      countdown = 3
      countdownNumber.textContent = countdown;

      if (score == 10) {
        alert("Victoire !")
        document.location.reload(true);
      }


    } else {
      alert("Dommage ! Vous avez " + score + " points.")
      document.location.reload(true);

    }
  })
})