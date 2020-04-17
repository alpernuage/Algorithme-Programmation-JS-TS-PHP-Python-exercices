let priceHT = 4900
let amountTVA
let priceTTC
let percentagereduction
let amountreduction
let amountFINAL

if (priceHT < 1000) {
  amountTVA = priceHT * 0.2
  priceTTC = priceHT + amountTVA
  percentagereduction = 1
  amountreduction = percentagereduction * priceTTC / 100
  amountFINAL = priceTTC - amountreduction
} else if (priceHT < 2000) {
  amountTVA = priceHT * 0.2
  priceTTC = priceHT + amountTVA
  percentagereduction = 1
  amountreduction = percentagereduction * priceTTC / 100
  amountFINAL = priceTTC - amountreduction
} else if (priceHT < 5000) {
  amountTVA = priceHT * 0.2
  priceTTC = priceHT + amountTVA
  percentagereduction = 3
  amountreduction = percentagereduction * priceTTC / 100
  amountFINAL = priceTTC - amountreduction
} else if (priceHT >= 5000) {
  amountTVA = priceHT * 0.2
  priceTTC = priceHT + amountTVA
  percentagereduction = 5
  amountreduction = percentagereduction * priceTTC / 100
  amountFINAL = priceTTC - amountreduction
}
console.log("price HT=" + priceHT + " amount TVA=" + amountTVA + " price TTC=" + priceTTC + " amountreduction=" + amountreduction + " amount FINAL=" + amountFINAL);
