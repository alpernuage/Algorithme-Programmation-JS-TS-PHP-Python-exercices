function afficherTableau(array) {
  let i = 0;
  let currentElement;
  while (i < array.length) {
    currentElement = array[i];
    i++;
    console.log(currentElement);

  }
}
let test = [1, 2];
afficherTableau(test);
