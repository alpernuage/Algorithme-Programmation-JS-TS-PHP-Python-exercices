


function display(array) {
  let i = 0;
  let currentElement;
  while (i < 10 && i <=array.length-1) {
    currentElement = array[i];
    i++;
    console.log(currentElement)
  }
};
let test = [12, 13, 14];
display(test);
