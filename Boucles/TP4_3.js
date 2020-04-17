function display(array) {
  let i = array.length - 1;
  let currentElement;
  while (i > (array.length - 11) && i >= 0) {
    currentElement = array[i];
    i = i - 1;
    console.log(currentElement)
  }
};
let test = [12, 13, 14];
display(test);
