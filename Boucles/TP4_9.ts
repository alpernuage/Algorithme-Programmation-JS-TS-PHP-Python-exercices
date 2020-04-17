function maxmin(array:number[]) {
  let i:number = 1;
  let controlmax:number = array[0];
  let controlmin:number = array[0];
  while (i < array.length) {
    let currentElement:number = array[i];
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

let test:number[] = [-1, 2, 3, 4, 5, 6, 7];
let result:number[] = maxmin(test);
console.log(result);
