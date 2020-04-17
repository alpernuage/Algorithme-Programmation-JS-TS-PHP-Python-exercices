function asc(array) {
  let i = 0;
  let previous = array[0];
  let ascending;
  while (i < array.length) {
    let currentElement = array[i];
    if (previous > currentElement) {
      ascending = false;
    } else if (previous < currentElement) {
      previous = currentElement;
      ascending = true;
    }
    i++;
  }
  return ascending;
}

let test = [-1, 2, 13, 4, 5, 6, 7];
let result = asc(test);
console.log(result);
