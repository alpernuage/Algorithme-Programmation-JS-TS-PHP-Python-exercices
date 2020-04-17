function inverse(array) {
  let i = array.length-1;
  let currentElement;
  let array2 = [];
  while (i >= 0) {
    let currentElement = array[i];
    console.log(currentElement);
    array2.push(currentElement);
    i--;
  }
  return array2;
}

let test = [1,2,3,4,5,6,7];
let result = inverse(test);
console.log(result);
