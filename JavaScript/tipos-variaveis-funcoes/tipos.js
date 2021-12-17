// Strings
console.log('===== Number =====')
console.log('===== Concatenação =====')

const apresentacao = "Olá, eu me chamo,"
let nome = "Pedro"

console.log(apresentacao + " " + nome)

console.log('===== Unicode =====')
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


// Normalização

let string1 = '\u00F1'
let string2 = '\u006E\u0303'

console.log('===== Normalização =====')
console.log(string1)
console.log(string2)
console.log(`Length primeria variável ${string1.length} `)  // Template string
console.log(`Length segunda variável ${string2.length} `)

string1 = string1.normalize('NFD')
string2 = string2.normalize('NFD')

console.log(string1)
console.log(string2)
console.log(`As variáveis são iguais? ${string1 === string2}`)
console.log(`Length primeria variável ${string1.length} `)
console.log(`Length segunda variável ${string2.length} `)

// Trim

let texto = " texto  "

console.log('===== Trim =====')
console.log(texto)
texto = texto.trim()
console.log(texto)

// Number
console.log('===== Number =====')
console.log('===== toExponential =====')

let numero = 10.5

console.log(numero)
console.log(numero.toExponential()) // string Exponential

console.log('===== Parse =====')
numero = "16.8"
numero = parseFloat(numero)
console.log(numero)
console.log(typeof numero)

console.log('===== isFinite =====')
let infinity = 0 
console.log(`isFinite? (0) ${Number.isFinite(infinity)}`)

infinity = '0' 
console.log(`isFinite? ('0') ${Number.isFinite(infinity)}`)
console.log(`Global.isFinite? ('0') ${isFinite(infinity)}`)

console.log(`Divisão por 0: (10 / 0) ${10 / 0}`)
console.log(`Divisão por 0: (0 / 0) ${0 / 0}`)
 