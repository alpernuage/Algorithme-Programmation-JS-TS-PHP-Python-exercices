function sumArray(array) {
  let i = 0;
  let sum = 0;
  let currentElement;
  while (i < array.length) {
    currentElement = array[i];
    sum = sum + currentElement
    i++;
  }
  console.log(sum);
  return sum;
}

let test = [12, 13, 14];
sumArray(test);
