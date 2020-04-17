// create funtion to show Interface ex2.1
function interface() {
  let title = document.createElement("h1");
  document.body.appendChild(title);
  title.innerText = "Cinéma Le Dauphin";
  let paragrapheCinema = document.createElement("p");
  document.body.appendChild(paragrapheCinema);
  paragrapheCinema.innerText = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débas, des ateliers, des ciné-goûters; de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi).";
  let buttonCinema = document.createElement("button");
  document.body.appendChild(buttonCinema);
  buttonCinema.innerText = "Voir les films à l'affiche cette semaine";
}

let testCinema = interface();


// create Table of the excercice ex2.2
let cinemaDolphin = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostvf"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostvf"]
];


// create function to return table HTML ex2.3
function cinema(something) {
  let mytable = document.createElement("table");
  document.body.appendChild(mytable);
  let tablebody = document.createElement("tbody");
  mytable.appendChild(tablebody);
  let tablehead = document.createElement("thead");
  mytable.appendChild(tablehead);
  let tabletr = document.createElement("tr");
  tablehead.appendChild(tabletr);
  let i = 0;
  let j = 1;
  let k = 0;
  let headerofTable = something[0];

  while (i < headerofTable.length) {
    let currentElement1 = headerofTable[i];
    let tableth = document.createElement("th");
    tabletr.appendChild(tableth);
    tableth.innerText = currentElement1;
    tableth.style.border = "1px solid";
    tableth.style.borderCollapse = "collapse";
    i++;
  }

  while (j < (something.length)) {
    let currentElement2 = something[j];
    let tabletr = document.createElement("tr");
    tablebody.appendChild(tabletr);
    k = 0;
    while (k < (currentElement2.length)) {
      let currentElement3 = currentElement2[k];
      let tabletd = document.createElement("td");
      tabletr.appendChild(tabletd);
      tabletd.innerText = currentElement3;
      tabletd.style.border = "1px solid";
      tabletd.style.borderCollapse = "collapse";
      k++;
    }
    j++;
  }
  return something;
}
// variable to test function
let result = cinema(cinemaDolphin);


// create different displays ex2.4
let ecran1 = document.createElement("div");
document.body.appendChild(ecran1);
ecran1.appendChild(title);
ecran1.appendChild(paragrapheCinema);
ecran1.appendChild(buttonCinema);
let ecran2 = document.createElement("div");
document.body.appendChild(ecran1);
ecran2.appendChild(cinemaDolphin);
ecran1.style.display = "block";
ecran2.style.display = "none";

// Function to change ecran display
let buttonCinema = document.getElementById("buttonCinema");
buttonCinema.addEventListener("click", function() {
  changeDisplay(ecran1, "none");
  changeDisplay(ecran2, "block");});

function changeDisplay(ecran, display) {
  ecran2.style.display = display;
}
