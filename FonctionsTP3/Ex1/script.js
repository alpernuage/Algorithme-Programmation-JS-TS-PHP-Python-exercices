let red_button = document.getElementById("red_button");
let blue_button = document.getElementById("blue_button");

red_button.addEventListener("click", function() {
  //TODO : Faire appel à la fonction changeBackgroundColorToRed
  changeBackgroundColor("red");
});

blue_button.addEventListener("click", function() {
  //TODO : Faire appel à la fonction changeBackgroundColorToBlue
  changeBackgroundColor("blue");
});

function changeBackgroundColor(color) {
  //TODO : Changer le background en rouge
  document.body.style.backgroundColor = color;
}
