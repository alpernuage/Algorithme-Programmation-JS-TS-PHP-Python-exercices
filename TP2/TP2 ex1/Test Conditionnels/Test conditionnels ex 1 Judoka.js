let age = 13
let gender = "DAMES"
let weight = 38
let agecategory
let weightcategory
let individualtime
let teamtime

if (age < 9) {
  //We train states of age below 9
  console.log("Bonjour, vous ne pouvez pas vous inscrire dans une catégorie.");

} else if (gender == "DAMES") {
  if (age < 11) {
    agecategory = "PREMINIMES"
    individualtime = "1 minute 30"
    teamtime = "/"
    //We train states of age below 11. Once we have the age, we have agecategory, agecategory,teamtime according to age information. Then we have to search for just weight category. For all of the age stages we will do same  technique
    if (weight < 30) {
      weightcategory = "-30"
    } else if (weight > 30 && weight < 50) {
      weightcategory = "30 à 50"
    } else {
      weightcategory = "+50"
    }
  } else if (age < 13) {
    agecategory = "MINIMES"
    individualtime = "2 minutes"
    teamtime = "/"
    if (weight < 30) {
      weightcategory = "-30"
    } else if (weight > 30 && weight < 50) {
      weightcategory = "30 à 50"
    } else {
      weightcategory = "+50"
    }
  } else if (age < 15) {
    agecategory = "CADETTES"
    individualtime = "3 minutes"
    teamtime = "3 minutes"
    if (weight < 32) {
      weightcategory = "-32"
    } else if (weight < 36) {
      weightcategory = "-36"
    } else if (weight < 40) {
      weightcategory = "-40"
    } else if (weight < 44) {
      weightcategory = "-44"
    } else if (weight < 48) {
      weightcategory = "-48"
    } else if (weight < 52) {
      weightcategory = "-52"
    } else if (weight < 57) {
      weightcategory = "-57"
    } else if (weight < 63) {
      weightcategory = "-63"
    } else {
      weightcategory = "+63"
    }
  }

} else if (gender == "MESSIEURS") {
  if (age < 11) {
    agecategory = "PREMINIMES"
    individualtime = "1 minute 30"
    teamtime = "/"
    if (weight < 30) {
      weightcategory = "-30"
    } else if (weight > 50) {
      weightcategory = "30 à 50"
    } else {
      weightcategory = "+50"
    }
  } else if (age < 13) {
    agecategory = "MINIMES"
    individualtime = "2 minutes"
    teamtime = "/"
    if (weight < 30) {
      weightcategory = "-30"
    } else if (weight > 30 && weight < 50) {
      weightcategory = "30 à 50"
    } else if (weight > 50) {
      weightcategory = "+50"
    }
  } else if (age < 15) {
    agecategory = "CADETTES"
    individualtime = "3 minutes"
    teamtime = "3 minutes"
    if (weight < 34) {
      weightcategory = "-34"
    } else if (weight < 38) {
      weightcategory = "-38"
    } else if (weight < 42) {
      weightcategory = "-42"
    } else if (weight < 46) {
      weightcategory = "-46"
    } else if (weight < 50) {
      weightcategory = "-50"
    } else if (weight < 55) {
      weightcategory = "-55"
    } else if (weight < 60) {
      weightcategory = "-60"
    } else if (weight < 66) {
      weightcategory = "-66"
    } else {
      weightcategory = "+66"
    }
  }
}

console.log("Bonjour. Votre agecategory: " + agecategory + ". Votre weightcategory: " + weightcategory + ". Votre individualtime: " + individualtime + ". Votre teamtime: " + teamtime);
