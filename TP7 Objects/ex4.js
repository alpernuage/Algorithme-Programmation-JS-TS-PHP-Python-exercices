let places = [{
    placeName: "Bibliotheque de la Grognarde",
    placeType: "Bibliotheque",
    placeLongitude: 5.43,
    placeLatitude: 43.29
  },
  {
    placeName: "Bibliotheque l'Alcazar",
    placeType: "Bibliotheque",
    placeLongitude: 5.37,
    placeLatitude: 43.29
  },
  {
    placeName: "Cinema le Chambord",
    placeType: "Cinéma",
    placeLongitude: 5.39,
    placeLatitude: 43.27
  }
];

for (let i = 0; i < places.length; i++) {
  let currentElement = places[i];
  console.log(currentElement.placeName);
}
