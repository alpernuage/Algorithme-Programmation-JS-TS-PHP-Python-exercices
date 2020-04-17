function occurence(array) {
  let i = 0;
  let j;
  let control1;
  let control2;
  let array2 = [];
  let presence = false;
  while (i < (array.length)) {
    let control1 = array[i];
    j = 0;
    console.log("search " + control1);
    while (j < (array2.length)) {
      let control2 = array2[j];
      if (control1 == control2) {
        presence = true;
        console.log("find " + control1);
      }
      j++;
    }
    if (!presence) {
      console.log("push " + control1);
      array2.push(control1);
    }
    presence = false;
    i++;
  }
  return array2;
}

let test = [0, 5, 5, 4, 4, 3, 3, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6];
let result = occurence(test);
console.log(result);
