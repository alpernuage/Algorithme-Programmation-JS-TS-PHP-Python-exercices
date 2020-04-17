function tableHorizontal(array) {
  let newtable = document.createElement("table");
  document.body.appendChild(newtable);
  let newthead = document.createElement("thead");
  newtable.appendChild(newthead);
  let newtrhead = document.createElement("tr");
  newthead.appendChild(newtrhead);
  let newth = document.createElement("th");
  newtrhead.appendChild(newth);
  newth.colSpan = array.length - 1
  let newtbody = document.createElement("tbody");
  newtable.appendChild(newtbody);
  let contentTheader = array[0];
  newth.innerText = contentTheader;
  let newtr = document.createElement("tr");
  newtbody.appendChild(newtr);
  let i = 1;
  while (i < (array.length)) {
    let currentElement = array[i];
    let newtd = document.createElement("td");
    newtr.appendChild(newtd);
    newtd.style.border = "1px solid";
    newtd.innerText = currentElement;
    i++;
  }
}

let test = ["table test", "foo", "bar", "baz", "qux", "quux", "corge"];
let result = tableHorizontal(test);
