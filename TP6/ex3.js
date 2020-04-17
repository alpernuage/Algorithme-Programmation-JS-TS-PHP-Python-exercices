function tableHorizontal(array) {
  let newtable = document.createElement("table");
  document.body.appendChild(newtable);
  let newtbody = document.createElement("tbody");
  newtable.appendChild(newtbody);
  let newtr = document.createElement("tr");
  newtbody.appendChild(newtr);
  // newtable.style.border-collapse: "collapse";
  let i = 0;
  while (i < (array.length)) {
    let currentElement = array[i];
    let newtd = document.createElement("td");
    newtr.appendChild(newtd);
    newtd.style.border = "1px solid";
    newtd.innerText = currentElement;
    i++;
  }
}

let test = ["foo", "bar", "baz"];
let result = tableHorizontal(test);
