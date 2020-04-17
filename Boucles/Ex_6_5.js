function takepositif(array) {
  let i = 0;
  let tableau2 = [];
  let elementCourant;
  while (i < (array.length)) {
    let elementCourant = array[i];
    if (elementCourant > 0) {
      tableau2.push(elementCourant);
    }
    i++;
  }
  return tableau2;
}

let test = [2, 5.2, -1.3,0, -2.5, 9.7, 8.143];
takepositif(test);
let positiveNumbers=takepositif(test);
console.log(positiveNumbers);
