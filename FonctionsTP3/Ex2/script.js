let greenButton = document.getElementById("greenButton");
let yellowButton = document.getElementById("yellowButton");
let blueButton = document.getElementById("blueButton");
let pinkButton = document.getElementById("pinkButton");

greenButton.addEventListener("click", function(){
  changeBackgroundColor("red")
});
yellowButton.addEventListener("click", function(){
  changeBackgroundColor("yellow")
});
blueButton.addEventListener("click", function(){
  changeBackgroundColor("blue")
});
pinkButton.addEventListener("click", function(){
  changeBackgroundColor("pink")
});

function changeBackgroundColor(color){
  document.body.style.backgroundColor = color;
}
