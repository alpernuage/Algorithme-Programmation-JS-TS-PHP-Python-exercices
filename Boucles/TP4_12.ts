function inverse(array:any[]) {
  let i = array.length-1;
  let currentElement:any;
  let array2:any[] = [];
  while (i >= 0) {
    let currentElement = array[i];
    console.log(currentElement);
    array2.push(currentElement);
    i--;
  }
  return array2;
}

let test:any[] = [1,2,3,4,5,6,7];
let result:any[] = inverse(test);
console.log(result);
