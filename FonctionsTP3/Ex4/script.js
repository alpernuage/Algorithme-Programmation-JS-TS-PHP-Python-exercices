let nightModeButton = document.getElementById("nightModeButton");
document.body.style.backgroundColor = "white";
let paragraph = document.getElementById("paragraph");

nightModeButton.addEventListener("click", function() {
  swapMode()
});

function swapMode() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    paragraph.style.color = "white";
    nightModeButton.value = "White Mode";
  } else if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
    paragraph.style.color = "black";
    nightModeButton.value = "Night Mode";
  }
}
