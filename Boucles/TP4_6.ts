function sumArray(array:number[]) {
  let i:number = 0;
  let sum:number = 0;
  let currentElement:number;
  while (i < array.length) {
    currentElement = array[i];
    sum = sum + currentElement
    i++;
  }
  console.log(sum);
  return sum;
}

let test:number[] = [12, 13, 14];
sumArray(test);
