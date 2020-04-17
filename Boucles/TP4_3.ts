function display(array:any[]) {
  let i:number = array.length - 1;
  let currentElement:any;
  while (i > (array.length - 11) && i >= 0) {
    currentElement = array[i];
    i = i - 1;
    console.log(currentElement)
  }
};
let test:any[] = [12, 13, 14];
display(test);
