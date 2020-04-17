function table2dimension(array) {
  let mytable = document.createElement("table");
  document.body.appendChild(mytable);
  let tablebody = document.createElement("tbody");
  mytable.appendChild(tablebody);
  let i = 0;
  let j = 0;

  while (i < (array.length)) {
    let currentElement1 = array[i];
    let tabletr = document.createElement("tr");
    tablebody.appendChild(tabletr);
    j = 0;
    while (j < (currentElement1.length)) {
      let currentElement2 = currentElement1[j];
      let tabletd = document.createElement("td");
      tabletr.appendChild(tabletd);
      tabletd.style.border = "1px solid";
      tabletd.innerText = currentElement2;
      j++;
    }
    i++;
  }
}

let test = [
  ["foo", "bar", "baz", "qux", "quux", "corge"],
  ["grault", "garply", "waldo", "fred", "plugh", "xyzzy"]
];
let result = table2dimension(test);
