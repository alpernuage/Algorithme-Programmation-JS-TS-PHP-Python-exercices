// 1- create Table of the excercice
let fishList = [
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
  ["Autheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
];

// 2-create function
function fishTable(something) {
  // create skeleton of table
  let mytable = document.createElement("table");
  document.body.appendChild(mytable);
  let tablebody = document.createElement("tbody");
  mytable.appendChild(tablebody);
  let tablehead = document.createElement("thead");
  mytable.appendChild(tablehead);
  let tabletr = document.createElement("tr");
  tablehead.appendChild(tabletr);
  let i = 0;
  let j = 0;
  let k = 0;
  // create header of table-red text
  let indexZero = ["Ordre", "Famille", "Nom vernaculaire", "Nom binominal"];
  let headerofTable = indexZero;
  // first loop to fill the header of table
  while (i < headerofTable.length) {
    let currentElement1 = headerofTable[i];
    let tableth = document.createElement("th");
    tabletr.appendChild(tableth);
    tableth.innerText = currentElement1;
    tableth.style.color = "red";
    tableth.style.border = "1px solid";
    tableth.style.borderCollapse = "collapse";
    i++;
  }
  // second lopp to fill rest of the table
  while (j < (something.length)) {
    let currentElement2 = something[j];
    let tabletr = document.createElement("tr");
    tablebody.appendChild(tabletr);
    k = 0;
    while (k < (currentElement2.length)) {
      let currentElement3 = currentElement2[k];
      let tabletd = document.createElement("td");
      tabletr.appendChild(tabletd);
      tabletd.innerText = currentElement3;
      tabletd.style.border = "1px solid";
      tabletd.style.borderCollapse = "collapse";
      if (currentElement2[k] == 3) {
        tabletd.style.fontStyle = "italic";
      }
      k++;
    }
    j++;
  }
  // get result of the function
  return something;
}
// put the function in a variable,variable to test function
let result = fishTable(fishList);
