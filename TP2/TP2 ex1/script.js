//We create one div for first line. We will have 1 label and 1 input in this line
let container1 = document.createElement("div");
document.body.appendChild(container1);
container1.id = "container1"

//We create one label in first line in order to label can positionning at the same line with input
let name = document.createElement("label");
name.for = "name"
name.textContent = "What is your name?";
container1.appendChild(name);

//We create one input for first line
let inputname = document.createElement("input");
inputname.type = "text"
inputname.name = "name"
inputname.id = "name"
container1.appendChild(inputname);

//We create one div for second line. We will have 1 label and 1 input in this line
let container2 = document.createElement("div");
document.body.appendChild(container2);
container2.id = "container2"

//We create one label in first line in order to label can positionning at the same line with input
let surname = document.createElement("label");
surname.for = "surname"
surname.textContent = "What is your surname?";
container2.appendChild(surname);

//We create one input for first line
let inputsurname = document.createElement("input");
inputsurname.type = "text"
inputsurname.name = "surname"
inputsurname.id = "surname"
container2.appendChild(inputsurname);

//We create one div for button at the third line
let container3 = document.createElement("div");
document.body.appendChild(container3);
container3.id = "container3"

//We create one input for button and we name its content
let button = document.createElement("input");
button.type = "button"
button.name = "button"
button.value = "OK"
button.id = "button"
container3.appendChild(button);

//We create one paragraphe for message out of the divs in the body
let message = document.createElement("p");
document.body.appendChild(message);

//We evaluate click states when inputs are empty or not
button.addEventListener("click", function(){
  if (inputname.value==""|| inputsurname.value=="") {
    message.textContent = "Please fill all of the blanks";
  }
  else {
    message.textContent = "Hello "+inputname.value+" "+inputsurname.value;
    document.getElementById("container1").hidden = true;
    document.getElementById("container2").hidden = true;
    document.getElementById("container3").hidden = true;
  }
  }, true);
