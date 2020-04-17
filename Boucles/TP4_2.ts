


function display(array:any[]) {
  let i:number = 0;
  let currentElement:any;
  while (i < 10 && i <=array.length-1) {
    currentElement = array[i];
    i++;
    console.log(currentElement)
  }
};
let test:number[] = [12, 13, 14];
display(test);
