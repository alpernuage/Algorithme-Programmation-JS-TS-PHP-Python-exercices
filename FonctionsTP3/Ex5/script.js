// not needed declarations just below
// let gameName1 = document.getElementById("gameName1");
// let gameRules1 = document.getElementById("gameRules1");
// let gameName2 = document.getElementById("gameName2");
// let gameRules2 = document.getElementById("gameRules2");
// let gameName3 = document.getElementById("gameName3");

// Declarations essential
let buttonStart = document.getElementById("buttonStart");
buttonStart.style.backgroundColor = "orange";
let ecran1 = document.getElementById("ecran1");
let ecran2 = document.getElementById("ecran2");
let ecran3 = document.getElementById("ecran3");
let randomLetter = String.fromCharCode(Math.floor((Math.random() * 25) + 97));
let letter = document.getElementById("letter");
letter.textContent = randomLetter;
let paragrapheScore = document.getElementById("paragrapheScore");
let score = 0;
paragrapheScore.textContent = score;
let messageFinal = document.getElementById("messageFinal");
let buttontoHomePage = document.getElementById("buttontoHomePage");
buttontoHomePage.style.backgroundColor = "aqua";
let gameState = false;

// style of screens
// ecran1.style.border = "2px solid black";
// ecran2.style.border = "2px solid black";
// ecran3.style.border = "2px solid black";

// Show first screen
// ecran1.style.display = "block"-not needed
ecran2.style.display = "none";
ecran3.style.display = "none";

// FUNCTIONS DISPLAY ALTERNATIVES
// function changeDisplay(display) {
//   ecran1.style.display = display;
// }
//
// function changeDisplay(display) {
//   ecran1.style.display = display;
// }
//
// function changeDisplay(display) {
//   ecran1.style.display = display;
// }

// Start button



// CODE DE DANIEL POUR REDEMARRER LE TIMER
// let timerParagraph = document.getElementById("timer_paragraph");
// let resetButton = document.getElementById("reset_button");
// resetButton.addEventListener("click", function() {
//   time = 5;
//   timerParagraph.textContent = time;
// });
// let time = 5;
// timerParagraph.textContent = time;
// setInterval(timer, 1000);
//
// function timer() {
//   if (time > 0) {
//     time = time - 1
//     timerParagraph.textContent = time;
//   } else {
//     timerParagraph.textContent = "terminé";
//   }
// }

buttonStart.addEventListener("click", function() {
  // For eliminate that 3rd screen shows
  gameState = true;
  timeleft = 5;
  ecran1.style.display = "none";
  ecran2.style.display = "block";
  // ecran3.style.display = "none";-not needed
});

// Function for have max 10 letters
document.addEventListener("keydown", function() {
  if (gameState == true) {
    timeleft = 5;
    if (event.key == randomLetter) {
      timeleft = 5;
      randomLetter = String.fromCharCode(Math.floor((Math.random() * 25) + 97));
      letter.textContent = randomLetter;
      score = score + 1;
      if (score == 10) {
        changeDisplay(ecran2, "none");
        changeDisplay(ecran3, "block");
        gameState = false;
      }
    } else {
      changeDisplay(ecran2, "none");
      changeDisplay(ecran3, "block");
      gameState = false;
    }
    paragrapheScore.textContent = score;
    messageFinal.textContent = "Congratulations! Your Score :" + score;
  }
});


let timeleft = 5;
let paragrapheTimer = document.getElementById("timer");
paragrapheTimer.textContent = timeleft;

let interval = setInterval(timer, 1000);

// Functions Display
function changeDisplay(ecran, display) {
  ecran.style.display = display
}

function timer() {
  // gameState = false;
  if (timeleft > 0) {
    timeleft--
    paragrapheTimer.textContent = timeleft;
  } else if (gameState == true) {
    changeDisplay(ecran2, "none");
    changeDisplay(ecran3, "block");
    messageFinal.textContent = "Congratulations! Your Score :" + score;
    paragrapheTimer.textContent = "timewasted";
    gameState = false;
    clearInterval(interval);
  }
}


// Function of Home Page button for restart to game
buttontoHomePage.addEventListener("click", function() {
  score = 0;
  gameState = false;
  paragrapheScore.textContent = score;
  changeDisplay(ecran1, "block");
  changeDisplay(ecran3, "none");
})

// Set timer to change letter
// let interval = setInterval(function() {
//   randomLetter = String.fromCharCode(Math.floor((Math.random() * 25) + 97));
// }, 3000);
