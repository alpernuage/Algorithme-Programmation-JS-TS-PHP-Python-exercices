function oddEven(array) {
  let i = 0;
  let currentElement;
  while (i < (array.length)) {
    let currentElement = array[i];
    if (currentElement % 2 == 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
    i++;
  }
}

let test = [2, 5.2, -1.3, 0, -2.5, 9.7, 8.143];
oddEven(test);
