// TP7 ex1
let places = [{
    placeName: "Bibliothèque de la Grognarde",
    placeType: "Bibliothèque",
    placeDescription: "C’est en 1988, sur l’emplacement d’une ancienne supérette, que cette bibliothèque a ouvert ses portes aux habitants des quartiers Est de Marseille. Située dans un secteur en pleine expansion, elle est très appréciée pour son équipe polyvalente et les nombreuses animations qu'elle propose.",
    placeAdress: "2 squareBerthier 13011 Marseille",
    placeLongitude: "5.4342214",
    placeLatitude: "43.294263"
  },
  {
    placeName: "Bibliothèque de L'Alcazar",
    placeType: "Bibliothèque",
    placeDescription: "Ouverte au public depuis le 30 mars 2004, la nouvelle bibliothèque s’implante sur l’ancien lieu mythique du music-hall et de la chanson française à Marseille.",
    placeAdress: "58 cours Belsunce 13001 Marseille",
    placeLongitude: "5.3766901",
    placeLatitude: "43.2989721"
  },
  {
    placeName: "Cinéma le Chambord",
    placeType: "Cinéma",
    placeDescription: "Cinéma de quartier comprenant plusieurs salles avec une programmation variée et des projections en VOST.",
    placeAdress: "283 avenue du Prado 13008 Marseille",
    placeLongitude: "5.38107",
    placeLatitude: "43.29695"
  },
  {
    placeName: "MuCEM – Musée des civilisations de l'Europe et de la Méditerranée",
    placeType: "Musée",
    placeDescription: "Célèbre musée face à la mer ouvert en 2013 avec expos sur l'histoire et les civilisations de la Méditerranée.",
    placeAdress: "Centre de la Vieille Charité, 13002 Marseille",
    placeLongitude: "5.361026",
    placeLatitude: "43.296729"
  },
  {
    placeName: "Opéra de Marseille",
    placeType: "Opéra",
    placeDescription: "Opéra à la programmation riche dans un bâtiment du XVIIIe siècle doté d'une grande salle Art déco.",
    placeAdress: "2 Rue Molière, 13001 Marseille",
    placeLongitude: "5.37588",
    placeLatitude: "43.293348 "
  },
  {
    placeName: "Cinéma Le Prado",
    placeType: "Cinéma",
    placeDescription: "Cinéma à la programmation grand public avec avant-premières et opéras du Royal Opera House de Londres",
    placeAdress: "36 Avenue du Prado, 13006 Marseille",
    placeLongitude: "5.3843901",
    placeLatitude: "43.2838163"
  }
];

function addNewPlace(name, type, description, address, longitude, latitude) {
  let place = {
    placeName: name,
    placeType: type,
    placeDescription: description,
    placeAdress: address,
    placeLongitude: longitude,
    placeLatitude: latitude
  }
  places.push(place);
};

// addNewPlace("test1", "test2", "test3", "test4", 5, 6);
// console.log(places);

let placesTable;
// TP7 ex2.1
function showTable(elementToShow) {
  placesTable = document.createElement("table");
  document.body.appendChild(placesTable);
  let tableBody = document.createElement("tbody");
  placesTable.appendChild(tableBody);
  for (let i = 0; i < elementToShow.length; i++) {
    let currentElement1 = elementToShow[i];
    let tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);
    let tdName = document.createElement("td");
    tdName.textContent = currentElement1.placeName
    tableRow.appendChild(tdName);
    let tdType = document.createElement("td");
    tdType.textContent = currentElement1.placeType
    tableRow.appendChild(tdType);
    let tdDescription = document.createElement("td");
    tdDescription.textContent = currentElement1.placeDescription
    tableRow.appendChild(tdDescription);
    let tdAdress = document.createElement("td");
    tdAdress.textContent = currentElement1.placeAdress
    tableRow.appendChild(tdAdress);
    let tdLongitude = document.createElement("td");
    tdLongitude.textContent = currentElement1.placeLongitude
    tableRow.appendChild(tdLongitude);
    let tdLatitude = document.createElement("td");
    tdLatitude.textContent = currentElement1.placeLatitude
    tableRow.appendChild(tdLatitude);
  }
};

let test = showTable(places);


// ex2.2

let placeForm = document.getElementById("placeForm");
let buttonValider = document.getElementById("buttonValider");
let inputName = document.getElementById("inputName");
let inputType = document.getElementById("inputType");
let inputDescription = document.getElementById("inputDescription");
let inputAdress = document.getElementById("inputAdress");
let inputLongitude = document.getElementById("inputLongitude");
let inputLatitude = document.getElementById("inputLatitude");

buttonValider.addEventListener("click", function() {
  let newPlaceName = inputName.value;
  let newType = inputType.value;
  let newDescription = inputDescription.value;
  let newAdress = inputAdress.value;
  let newLongitude = inputLongitude.value;
  let newLatitude = inputLatitude.value;
  //We have to hide the table and show again to add un row
  addNewPlace(newPlaceName, newType, newDescription, newAdress, newLongitude, newLatitude);
  // Remove element HTML "table"
  document.body.removeChild(placesTable);
  // Call the table
  showTable(places);

});

// ex3.1
// copied from Tutorial/See this example stand-alone./code source
let cinemasLayer = L.layerGroup([]);
let librairiesLayer = L.layerGroup([]);

var myMap = L.map('mapid', {
  center: [43.29449725678267, 5.374099971224693],
  zoom: 12,
  layers: [cinemasLayer, librairiesLayer]
});

var overlayMaps = {
  "Cinémas": cinemasLayer,
  "Bibliothèques": librairiesLayer
};

L.control.layers(null, overlayMaps).addTo(myMap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  accessToken: 'pk.eyJ1IjoiYWxwZXJha2J1bHV0IiwiYSI6ImNrNXdsemZvZDBuOWQzb2xiMmhvMzZzNGMifQ.MMl7g6pZRSnrtxKpiRjiPA'
}).addTo(myMap);

// when we click on marker elements below will be showed
for (var i = 0; i < places.length; i++) {
  currentMarker = places[i];
  let marker = L.marker([currentMarker.placeLatitude, currentMarker.placeLongitude]); //Crée un marker
  marker.bindPopup(currentMarker.placeName + "<br>" + currentMarker.placeType + "<br>" + currentMarker.placeDescription)
  marker.openPopup();

  if (currentMarker.placeType == "Cinéma") {
    marker.addTo(cinemasLayer) //Ajoute un marker à la carte
  } else if (currentMarker.placeType == "Bibliothèque") {
    marker.addTo(librairiesLayer) //Ajoute un marker à la carte

  }
}

// LAYER SYSTEM
// var layer = L.marker(latlng).addTo(map);
// layer.addTo(map);
// layer.remove();
//
// L.layerGroup([marker1, marker2])
//   .addLayer(polyline)
//   .addTo(myMap);

// Creating layer group
// var layerGroup = L.layerGroup([marker1, merker2]);
// layerGroup.addTo(myMap); // Adding layer group to map

// Creating a Layer object


// var cinema = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
//   library = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
//   museum = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
//   opera = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
//
// var cities = L.layerGroup([cinema, library, museum, opera]);

// var cities = L.layerGroup();
//
//
//
// 	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', attribution: mbAttr}),
// 		streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11',   attribution: mbAttr});
//
// 	var map = L.map('map', {
// 		center: [39.73, -104.99],
// 		zoom: 10,
// 		layers: [grayscale, cities]
// 	});
//
// 	var baseLayers = {
// 		"Grayscale": grayscale,
// 		"Streets": streets
// 	};
//
// 	var overlays = {
// 		"Cities": cities
// 	};
//
// 	L.control.layers(baseLayers, overlays).addTo(map);
