function maxmin(array) {
  let i = 1;
  let controlmax = array[0];
  let controlmin = array[0];
  while (i < array.length) {
    let currentElement = array[i];
    if (controlmax < currentElement) {
      controlmax = currentElement;
    }
    if (controlmin > currentElement) {
      controlmin = currentElement;
    }
    i++;
  }
  return [controlmax, controlmin];
}

let test = [-1, 2, 3, 4, 5, 6, 7];
let result = maxmin(test);
console.log(result);
