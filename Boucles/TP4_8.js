function max(array) {
  let i = 1;
  let controlmax = array[0];
  while (i < array.length) {
    let currentElement = array[i];
    if (controlmax < currentElement) {
      controlmax = currentElement;
    }
    i++;
  }
  return controlmax;
}

let test = [-1, -2, -3, -4, -5, -6, -7];
let result = max(test);
console.log(result);
