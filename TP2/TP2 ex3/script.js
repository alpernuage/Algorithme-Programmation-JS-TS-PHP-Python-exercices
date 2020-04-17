let ecran1 = document.createElement("div");
document.body.appendChild(ecran1);
ecran1.style.border = "2px solid black";
ecran1.style.padding = "10px";
ecran1.style.margin = "20px";


let title1_1 = document.createElement("p");
ecran1.appendChild(title1_1);
title1_1.textContent = "Selectionnnez un ou plusieurs plats"

let line1_1 = document.createElement("div");
ecran1.appendChild(line1_1);

let checkboxSandwish = document.createElement("input");
checkboxSandwish.type = "checkbox"
line1_1.appendChild(checkboxSandwish);

let labelSandwish = document.createElement("label");
line1_1.appendChild(labelSandwish)
labelSandwish.textContent = "Sandwish (5.50 euros)"

let line1_2 = document.createElement("div");
ecran1.appendChild(line1_2);

let checkboxPlateaumezze = document.createElement("input");
checkboxPlateaumezze.type = "checkbox"
line1_2.appendChild(checkboxPlateaumezze);

let labelPlateaumezze = document.createElement("label");
line1_2.appendChild(labelPlateaumezze)
labelPlateaumezze.textContent = "Plateau mezze (10.50 euros)"

let line1_3 = document.createElement("div");
ecran1.appendChild(line1_3);

let checkboxPlatdujour = document.createElement("input");
checkboxPlatdujour.type = "checkbox"
line1_3.appendChild(checkboxPlatdujour);

let labelPlatdujour = document.createElement("label");
line1_3.appendChild(labelPlatdujour)
labelPlatdujour.textContent = "Plat du jour (8 euros)"

let button1_1Continuer = document.createElement("input");
button1_1Continuer.type = "button"
button1_1Continuer.value = "Continuer"
button1_1Continuer.style.background = "blue"
button1_1Continuer.style.color = "white"
ecran1.appendChild(button1_1Continuer);

button1_1Continue.addEventListener("click", function() {
  showMessage1()
});

function showMessage1() {
  if (checkboxSandwish == "" && checkboxPlateaumezze == "" && checkboxPlatdujour == "") {
    let title1_2 = document.createElement("p");
    ecran1.appendChild(title1_2);
    title1_2.textContent = "Veuillez selectionnner au moins un plat";
    title1_2.style.color = "red";
  } else {
    ecran1.style.display = "none";
    ecran2.style.display = "block";
  }
}


let ecran2 = document.createElement("div");
document.body.appendChild(ecran2);
ecran2.style.border = "2px solid black";
ecran2.style.padding = "10px";
ecran2.style.margin = "20px";

let title2_1 = document.createElement("p");
ecran2.appendChild(title2_1);
title2_1.textContent = "Le prix total de votre commande est de [prix total] euros"

let button2_1Retour = document.createElement("input");
button2_1Retour.type = "button"
button2_1Retour.value = "Retour"
button2_1Retour.style.background = "blue"
button2_1Retour.style.color = "white"
ecran2.appendChild(button2_1Retour);

let button2_2Continuer = document.createElement("input");
button2_2Continuer.type = "button"
button2_2Continuer.value = "Continuer"
button2_2Continuer.style.background = "blue"
button2_2Continuer.style.color = "white"
ecran2.appendChild(button2_2Continuer);

button2_1Retour.addEventListener("click", function() {
  showEcran1()
});

function showEcran1() {
  ecran1.style.display = "block";
  ecran2.style.display = "none";
}


button2_2Continue.addEventListener("click", function() {
  showEcran3()
});

function showEcran3() {
  ecran2.style.display = "none";
  ecran3.style.display = "block";
}





let ecran3 = document.createElement("div");
document.body.appendChild(ecran3);
ecran3.style.border = "2px solid black";
ecran3.style.padding = "10px";
ecran3.style.margin = "20px";

let title3_1 = document.createElement("p");
ecran3.appendChild(title3_1);
title3_1.textContent = "Comment souhaitez-vous payer votre commande?"

let line3_1 = document.createElement("div");
ecran3.appendChild(line3_1);

let radioVISA = document.createElement("input");
radioVISA.type = "radio"
radioVISA.name = "paiement"
line3_1.appendChild(radioVISA);

let labelVISA = document.createElement("label");
line3_1.appendChild(labelVISA)
labelVISA.textContent = "Maintenant par carte bancaire VISA"

let line3_2 = document.createElement("div");
ecran3.appendChild(line3_2);

let radioCheque_especes = document.createElement("input");
radioCheque_especes.type = "radio"
radioCheque_especes.name = "paiement"
line3_2.appendChild(radioCheque_especes);

let labelCheque_especes = document.createElement("label");
line3_2.appendChild(labelCheque_especes)
labelCheque_especes.textContent = "À la livraison en espèces ou en chèque"

let button3_1Retour = document.createElement("input");
button3_1Retour.type = "button"
button3_1Retour.value = "Retour"
button3_1Retour.style.background = "blue"
button3_1Retour.style.color = "white"
ecran3.appendChild(button3_1Retour);

let button3_2Continuer = document.createElement("input");
button3_2Continuer.type = "button"
button3_2Continuer.value = "Continuer"
button3_2Continuer.style.background = "blue"
button3_2Continuer.style.color = "white"
ecran3.appendChild(button3_2Continuer);

button3_1Retour.addEventListener("click", function() {
  showEcran2()
});

function showEcran2() {
  ecran2.style.display = "block";
  ecran3.style.display = "none";
}


button3_2Continuer.addEventListener("click", function() {
  payment()
});

function payment() {
  if (radioVISA !== "") {
    ecran3.style.display = "none";
    ecran4.style.display = "block";
  } else if (radioCheque_especes !== "") {
    ecran3.style.display = "none";
    ecran5.style.display = "block";
  }
}


let ecran4 = document.createElement("div");
document.body.appendChild(ecran4);
ecran4.style.border = "2px solid black";
ecran4.style.padding = "10px";
ecran4.style.margin = "20px";

let title4_1 = document.createElement("p");
ecran4.appendChild(title4_1);
title4_1.textContent = "Paiement par carte bancaire VISA"

let title4_2 = document.createElement("p");
ecran4.appendChild(title4_2);
title4_2.textContent = "Numéro carte bancaire"

let input4_1numerocartebancaire4_1 = document.createElement("input");
input4_1numerocartebancaire4_1.type = "number"
ecran4.appendChild(input4_1numerocartebancaire4_1);

let title4_3 = document.createElement("p");
ecran4.appendChild(title4_3);
title4_3.textContent = "Date d'expiration :"

let label4_1mois = document.createElement("label");
ecran4.appendChild(label4_1mois)
label4_1mois.textContent = "Mois"

let input4_2mois = document.createElement("input");
input4_2mois.type = "number"
ecran4.appendChild(input4_2mois);

let label4_2Année = document.createElement("label");
ecran4.appendChild(label4_2Année)
label4_2Année.textContent = "Année"

let input4_3Année = document.createElement("input");
input4_3Année.type = "number"
ecran4.appendChild(input4_3Année);

let title4_4 = document.createElement("p");
ecran4.appendChild(title4_4);
title4_4.textContent = "Cryptogramme :"

let input4_4Cryptogramme = document.createElement("input");
input4_4Cryptogramme.type = "number"
ecran4.appendChild(input4_4Cryptogramme);

let title4_5 = document.createElement("p");
ecran4.appendChild(title4_5);
title4_5.textContent = "NomduTitulaire :"

let input4_5NomduTitulaire = document.createElement("input");
input4_5NomduTitulaire.type = "number"
ecran4.appendChild(input4_5NomduTitulaire);

let line4_10 = document.createElement("div");
ecran4.appendChild(line4_10);

let button4_1Retour = document.createElement("input");
button4_1Retour.type = "button"
button4_1Retour.value = "Retour"
button4_1Retour.style.background = "blue"
button4_1Retour.style.color = "white"
line4_10.appendChild(button4_1Retour);

let button4_2Continuer = document.createElement("input");
button4_2Continuer.type = "button"
button4_2Continuer.value = "Continuer"
button4_2Continuer.style.background = "blue"
button4_2Continuer.style.color = "white"
line4_10.appendChild(button4_2Continuer);

let title4_6 = document.createElement("p");
ecran4.appendChild(title4_6);
title4_6.textContent = "Veuillez saisir toutes les informations demandées avant de continuer."
title4_6.style.color = "red"


button4_1Retour.addEventListener("click", function() {
  showEcran3()
});

function showEcran3() {
  ecran3.style.display = "block";
  ecran4.style.display = "none";
}


button4_2Continuer.addEventListener("click", function() {
  showMessage4()
});

function showMessage4() {
  if (input4_1numerocartebancaire4_1 == "" || input4_2mois == "" || input4_3Année == "" || input4_4Cryptogramme == "" || input4_5NomduTitulaire == "") {
    let title4_2 = document.createElement("p");
    ecran1.appendChild(title1_2);
    title4_2.textContent = "Veuillez saisir toutes les informations demandées avant de continue";
    title4_2.style.color = "red";
  } else {
    ecran4.style.display = "none";
    ecran5.style.display = "block";
  }
}


let ecran5 = document.createElement("div");
document.body.appendChild(ecran5);
ecran5.style.border = "2px solid black";
ecran5.style.padding = "10px";
ecran5.style.margin = "20px";

let title5_1 = document.createElement("p");
ecran5.appendChild(title5_1);
title5_1.textContent = "Votre commande a bien été prise en compte."
