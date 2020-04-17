function isSingle(myArray: number[]) {
  let i: number = 0;
  let j: number = 0;
  // variable counter to get if element exist again in array
  let counter: number = 0;
  // create elements to compare
  let currentElement1: number;
  let currentElement2: number;
  let booleanSingle: boolean;
  while (i < (myArray.length)) {
    let currentElement1 = myArray[i];
    j = 0;
    while (j < (myArray.length)) {
      currentElement2 = currentElement1[j];
      if (currentElement2 == currentElement1) {
        counter++;
        booleanSingle = false;
      } else {
        booleanSingle = true;
      }
      j++;
    }
    i++;
  }
  return booleanSingle;
}

let test = [1, 2, 1, 3, 1, 4, 4];
let result = isSingle(test);
