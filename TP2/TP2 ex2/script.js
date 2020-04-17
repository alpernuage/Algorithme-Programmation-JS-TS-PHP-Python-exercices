//We create one div for FIRST line. We will have 1 label and 1 input in this line
let div1 = document.createElement("div");
document.body.appendChild(div1);
//We create one label in first line in order to label can positionning at the same line with input
let label_line1 = document.createElement("label");
div1.appendChild(label_line1);
label_line1.type = "text"
label_line1.textContent = "Salary Brut"
//We create one input for first line
let input_line1 = document.createElement("input");
div1.appendChild(input_line1);
input_line1.type = "number"


//We create one div for SECOND line. We will have 1 label and 1 input in this line
let div2 = document.createElement("div");
document.body.appendChild(div2);
//We create one label in SECOND line in order to label can positionning at the same line with input
let label_line2 = document.createElement("label");
div2.appendChild(label_line2);
label_line2.type = "text"
label_line2.textContent = "Salary Net"
//We create one input for SECOND line
let input_line2 = document.createElement("input");
div2.appendChild(input_line2);
input_line2.type = "number"


//We create one div for THIRD line. We will have 1 label and 1 input in this line
let div3 = document.createElement("div");
document.body.appendChild(div3);
//We create one label in THIRD line in order to label can positionning at the same line with input
let label_line3 = document.createElement("label");
div3.appendChild(label_line3);
label_line3.type = "text"
label_line3.textContent = "Yearly Brut"
//We create one input for THIRD line
let input_line3 = document.createElement("input");
div3.appendChild(input_line3);
input_line3.type = "number"


//We create one div for FOURTH line. We will have 1 label and 1 input in this line
let div4 = document.createElement("div");
document.body.appendChild(div4);
//We create one label in FOURTH line in order to label can positionning at the same line with input
let label_line4 = document.createElement("label");
div4.appendChild(label_line4);
label_line4.type = "text"
label_line4.textContent = "Yearly Net"
//We create one input for FOURTH line
let input_line4 = document.createElement("input");
div4.appendChild(input_line4);
input_line4.type = "number"

// We calculate salary according to informations given
// Attribute change allows update automatically when there is an action

input_line1.addEventListener("change", function() {

  input_line2.value = input_line1.value / 1.298
  input_line3.value = input_line1.value * 12
  input_line4.value = input_line1.value * 12/1.298
});

input_line2.addEventListener("change", function() {
  input_line1.value = input_line2.value * 1.298
  input_line3.value = input_line2.value * 12*1.298
  input_line4.value = input_line2.value * 12
});

input_line3.addEventListener("change", function() {
  input_line1.value = input_line3.value / 12
  input_line2.value = input_line3.value / 12/1.298
  input_line4.value = input_line3.value / 1.298
});

input_line4.addEventListener("change", function() {
  input_line1.value = input_line4.value / 12*1.298
  input_line2.value = input_line4.value / 12
  input_line3.value = input_line4.value * 1.298

});
