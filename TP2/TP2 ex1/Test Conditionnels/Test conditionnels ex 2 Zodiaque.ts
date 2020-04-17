let day: number = -1
let month: string = "december"
let horoscope: string = ""

if ((day >= 21 && day <= 31 && month == "march") || (day <= 20 && day >= 1 && month == "april")) {
  console.log(horoscope = "Bélier");
} else if ((day >= 21 && day <= 30 && month == "april") || (day <= 21 && day >= 1 && month == "may")) {
  console.log(horoscope = "Taureau");
} else if ((day >= 22 && day <= 31 && month == "may") || (day <= 21 && day >= 1 && month == "juin")) {
  console.log(horoscope = "Gémeaux");
} else if ((day >= 22 && day <= 30 && month == "juin") || (day <= 22 && day >= 1 && month == "july")) {
  console.log(horoscope = "Cancer");
} else if ((day >= 23 && day <= 31 && month == "july") || (day <= 22 && day >= 1 && month == "august")) {
  console.log(horoscope = "Lion");
} else if ((day >= 23 && day <= 31 && month == "august") || (day <= 22 && day >= 1 && month == "september")) {
  console.log(horoscope = "Vierge");
} else if ((day >= 23 && day <= 30 && month == "september") || (day <= 22 && day >= 1 && month == "october")) {
  console.log(horoscope = "Balance");
} else if ((day >= 23 && day <= 31 && month == "october") || (day <= 22 && day >= 1 && month == "november")) {
  console.log(horoscope = "Scorpion");
} else if ((day >= 23 && day <= 30 && month == "november") || (day <= 21 && day >= 1 && month == "december")) {
  console.log(horoscope = "Sagittaire");
} else if ((day >= 22 && day <= 31 && month == "december") || (day <= 20 && day >= 1 && month == "january")) {
  console.log(horoscope = "Capricorne");
} else if ((day >= 21 && day <= 31 && month == "january") || (day <= 18 && day >= 1 && month == "february")) {
  console.log(horoscope = "Verseau");
} else if ((day >= 19 && day <= 29 && month == "february") || (day <= 22 && day >= 1 && month == "march")) {
  console.log(horoscope = "Poissons");
}
else {
  console.log("Date doesn't exist");
}
