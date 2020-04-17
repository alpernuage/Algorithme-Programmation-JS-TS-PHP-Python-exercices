const COLUMN_NAME = 0;
const COLUMN_LAST_NAME = 1;
const COLUMN_AGE = 2;
const COLUMN_CITY = 3;
const COLUMN_MAIL = 4;
const COLUMN_IDENTIFY = 5;


// ex 8-1

// function tableProfil(array) {
//   let mytable = document.createElement("table");
//   document.body.appendChild(mytable);
//   let tablebody = document.createElement("tbody");
//   mytable.appendChild(tablebody);
//   let i = 0;
//   let j = 0;
//
//   while (i < array.length) {
//     let currentElement1 = array[i];
//     let tablerow = document.createElement("tr");
//     tablebody.appendChild(tablerow);
//     j = 0;
//     while (j < currentElement1.length) {
//       let currentElement2 = currentElement1[j];
//       let tabletd = document.createElement("td");
//       tablerow.appendChild(tabletd);
//       tabletd.innerText = currentElement2;
//       j++;
//     }
//     i++;
//   }
// }

let users = [
  ["Prénom", "Nom", "Age", "Ville", "Addresse mail", "Identifiant"],
  ["Mathias", "Ritrono", 34, "Nantes", "mr @yopmail.com", 1],
  ["Salif", "Bamogo", 25, "Brest", "sb@yopmail.com", 2],
  ["Kristina", "Pavlov", 20, "Villeurbanne", "kp@yopmail.com", 3],
  ["Elise", "Seti", 30, "Grenoble", "es@yopmail.com", 4],
  ["Pierrick", "Di Angelo", 18, "Strasbourg", "pd@yopmail.com", 5],
  ["Mohamed", "Khaoui", 23, "Lille", "mh@yopmail.com", 6],
  ["Paige", "Anderson", 42, "Evry", "pa@yopmail.com", 7]
];
// let result = tableProfil(test);


// ex8-2
function addUser(name, lastname, age, city, mail) {
  let id = users.length;
  users.push([name, lastname, age, city, mail, id]);
}

let test2 = addUser("Jack", "London", 23, "Lille", "mymail@gmail.com");
console.log(users);


// ex8-3
function sameCity(ville) {
  let i = 1;
  let usersofSameCity = [];
  while (i < users.length) {
    let currentUser = users[i];

    if ((currentUser[COLUMN_CITY]) == ville) {
      usersofSameCity.push(currentUser);
    }
    i++;
  }
  console.log(usersofSameCity);
  return usersofSameCity;
}

sameCity("Lille");

// ex8-4
function sameName(name) {
  let i = 1;
  let sameNameLastname = [];
  while (i < users.length) {
    let currentElement = users[i];
    if (currentElement[COLUMN_NAME] == name || currentElement[COLUMN_LAST_NAME] == name) {
      sameNameLastname.push(currentElement);
    }
    i++;
  }
  console.log(sameNameLastname);
  return sameNameLastname;
}
sameName("Bamogo");


// ex8-5
function searchString(searchYourWord) {
  let i = 1;
  let j = 0;
  let tableSearchString = [];
  while (i < users.length) {
    let currentElement = users[i];
    j = 0;
    while (j < currentElement.length) {
      let currentString = currentElement[j];
      if (currentElement[j] == searchYourWord) {
        tableSearchString.push(currentElement);
      }
      j++;
    }
    i++;
  }
  console.log(tableSearchString);
  return tableSearchString;
}
searchString("Bamogo");


// ex8-6
function createTable(myTable, myBoolean) {
  let myTable = document.createElement("table");
  document.appendChild(myTable);
  let myBoolean = true;
  if (myBoolean = true) {
    let tableBody = document.createElement("tbody");
    myTable.appendChild(tableBody);
    let tableHead = document.createElement("thead");
    tableBody.appendChild(tableHead);
    let tableheader = document.createElement("th");
    tableBody.appendChild(tableheader);
    let tableH

  }
}
