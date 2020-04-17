function showHorizontal(array) {
  let i = 0;
  while (i < (array.length)) {
    let currentElement = array[i];
    let para = document.createElement("p");
    document.body.appendChild(para);
    para.style.display = "inline-block";
    para.innerText = currentElement;
    para.style.marginRight = "1em";
    i++;
  }
}

let test = ["foo", "bar", "baz"];
let result = showHorizontal(test);
