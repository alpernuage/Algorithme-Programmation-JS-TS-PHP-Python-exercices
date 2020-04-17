function afficherTableau(array:any[]) {
  let i:number = 0;
  let currentElement:any;
  while (i < array.length) {
    currentElement = array[i];
    i++;
    console.log(currentElement);
  }
};
let test:any[] = [1, 2];
afficherTableau(test);
