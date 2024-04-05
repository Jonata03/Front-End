let numero = 1234567.890

console.log(numero.toFixed(2))
console.log(typeof  numero.toFixed(2))

console.log(numero.toPrecision(15))
console.log((123).toPrecision(6))

console.log(numero.toExponential())
console.log(numero.toExponential(4))

numero = 15
console.log((0).toString(2))
console.log((1).toString(2))
console.log((2).toString(2))
console.log((3).toString(2))
console.log((4).toString(2))

console.log((18).toString(16))
console.log((14).toString(16))
console.log((15).toString(16))

numero = 123456.789

console.log(numero.toLocaleString())
console.log(numero.toLocaleString("pt-BR"))
console.log(numero.toLocaleString("pt-BR",{style:"currency", currency:"BRL"}))

console.log(Number.MAX_VALUE, Number.MIN_VALUE)

let numeroAsString = "3.456"
console.log(isNaN(numeroAsString))
console.log(numeroAsString, typeof numeroAsString, parseFloat(numeroAsStringf))