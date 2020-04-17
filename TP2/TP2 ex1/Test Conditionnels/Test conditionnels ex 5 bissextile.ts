let year: number = 100

if (year % 4 == 0 && year % 100 == 0 && year % 400 !== 0) {
  console.log("leap year");
} else {
  console.log("isn't leap year");
}
