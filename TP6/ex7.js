function table2dimensionwithheader(array) {
  let mytable = document.createElement("table");
  document.body.appendChild(mytable);
  let tablebody = document.createElement("tbody");
  mytable.appendChild(tablebody);
  let tablehead = document.createElement("thead");
  mytable.appendChild(tablehead);
  let tabletr = document.createElement("tr");
  tablehead.appendChild(tabletr);
  let i = 0;
  let j = 1;
  let k = 0;
  let tableforhead = array[0];

  while (i < tableforhead.length) {
    let currentElement1 = tableforhead[i];
    let tableth = document.createElement("th");
    tabletr.appendChild(tableth);
    tableth.innerText = currentElement1;
    i++;
  }

  while (j < (array.length)) {
    let currentElement2 = array[j];
    let tabletr = document.createElement("tr");
    tablebody.appendChild(tabletr);
    k = 0;
    while (k < (currentElement2.length)) {
      let currentElement3 = currentElement2[k];
      let tabletd = document.createElement("td");
      tabletr.appendChild(tabletd);
      tabletd.innerText = currentElement3;
      k++;
    }
    j++;
  }
}

let test = [
  ["col1", "col2", "col3", "col4", "col5", "col6"],
  ["foo", "bar", "baz", "qux", "quux", "corge"],
  ["grault", "garply", "waldo", "fred", "plugh", "xyzzy"]
];
let result = table2dimensionwithheader(test);
