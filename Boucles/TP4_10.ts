function asc(array: number[]) {
  let i: number = 0;
  let previous: number = array[0];
  let ascending:boolean;
  while (i < array.length) {
    let currentElement: number = array[i];
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

let test: number[] = [-1, 2, 13, 4, 5, 6, 7];
let result: boolean = asc(test);
console.log(result);
