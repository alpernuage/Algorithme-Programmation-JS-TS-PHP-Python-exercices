function oddEven(array:number[]) {
  let i:number = 0;
  let currentElement:number;
  while (i < (array.length)) {
    let currentElement = array[i];
    if (currentElement % 2 == 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
    i++;
  }
}

let test:number[] = [2, 5.2, -1.3, 0, -2.5, 9.7, 8.143];
oddEven(test);
