function oddEven(array:number[]) {
  let i:number = 0;
  let counter:number=0;
  while (i < (array.length)) {
    let currentElement = array[i];
    if (currentElement % 2 == 0) {
      counter++;
    } else {}
    i++;
  }
  console.log(counter);
}

let test:number[] = [1,2,3,4,5,6,7];
oddEven(test);
