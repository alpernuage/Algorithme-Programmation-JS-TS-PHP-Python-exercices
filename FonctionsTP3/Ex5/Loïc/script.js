let nameOfTheGame = document.getElementById('name')
let rulesOfTheGame = document.getElementById('rules')
let startButton = document.getElementById('start')
let screen1 = document.getElementById('screen1')

let nameOfTheGameScreen2 = document.getElementById('name2')
let score = document.getElementById('score')
let scoreOfTheGame = 0
score.textContent=scoreOfTheGame

let letter = document.getElementById('letter')
let screen2 = document.getElementById('screen2')

let randomLetter = String.fromCharCode(Math.floor((Math.random() * 25) + 97));
letter.textContent=randomLetter

let accueil = document.getElementById('accueil')
let endingMessage = document.getElementById('messageScore')

screen2.style.display="none";
screen3.style.display="none";

startButton.addEventListener("click" , function (display) {
  displayScreen1("none")
  displayScreen2("block")
});


function displayScreen1 (display){
    screen1.style.display=display;
}

function displayScreen2 (display){
    screen2.style.display=display;
}

function displayScreen3 (display){
    screen3.style.display=display;
}

document.addEventListener("keydown" , function () {
  if (event.key==randomLetter & scoreOfTheGame<=10) {
    scoreOfTheGame=scoreOfTheGame+1
    score.textContent=scoreOfTheGame
    randomLetter = String.fromCharCode(Math.floor((Math.random() * 25) + 97));
    letter.textContent = randomLetter
    endingMessage.textContent="votre score est de "+scoreOfTheGame
  } else if (scoreOfTheGame==10) {
    displayScreen2("none")
    displayScreen3("block")
    endingMessage.textContent="votre score est de "+scoreOfTheGame
  }else {
    displayScreen2("none")
    displayScreen3("block")
    endingMessage.textContent="votre score est de "+scoreOfTheGame
  }
});


accueil.addEventListener("click" , function (){
  scoreOfTheGame=0
  score.textContent=scoreOfTheGame
  displayScreen3("none")
  displayScreen1("block")
})
