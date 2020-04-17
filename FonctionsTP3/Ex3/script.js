let swapButton = document.getElementById("swapButton");
document.body.style.backgroundColor = "white";

swapButton.addEventListener("click", function() {
  changeBackgroundColor()
});

function changeBackgroundColor() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "green";
  } else if (document.body.style.backgroundColor == "green") {
    document.body.style.backgroundColor = "black";
  } else if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "yellow";
  } else if (document.body.style.backgroundColor == "yellow") {
    document.body.style.backgroundColor = "pink";
  } else if (document.body.style.backgroundColor == "pink") {
    document.body.style.backgroundColor = "white";
  }
}
