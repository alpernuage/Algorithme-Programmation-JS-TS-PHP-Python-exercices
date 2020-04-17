function showVertical(array) {
  let i = 0;
  while (i < (array.length)) {
    let currentElement = array[i];
    let para = document.createElement("label");
    document.body.appendChild(para);
    para.style.display = "block";
    para.innerText = currentElement;
    i++;
  }
}

let test = ["foo", "bar", "baz"];
let result = showVertical(test);
