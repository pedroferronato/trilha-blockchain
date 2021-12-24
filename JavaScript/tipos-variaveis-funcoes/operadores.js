console.log('===== Operações matemáticas =====')

const numero1 = 2;
const numero2 = 4;

console.log(`Adição (2 + 4): ${numero1 + numero2}`)
console.log(`Subtração (2 - 4): ${numero1 - numero2}`)
console.log(`Multiplicação (2 * 4): ${numero1 * numero2}`)
console.log(`Divisão (2 / 4): ${numero1 / numero2}`)
console.log(`Restante (2 % 4): ${numero1 % numero2}`)
console.log(`Exponenciação (2 ** 4): ${numero1 ** numero2}`)

console.log('===== Operadores de comparação =====')

const zero = 0
const stringZero = '0'
const pi = 3.14
const dez = 10

console.log(`Igualdade estrita (===) | 0 === '0' -> ${zero === stringZero}`)
console.log(`Não-igualdade-estrita (!==) | 0 !== '0' -> ${zero !== stringZero}`)
console.log(`Igualdade (==) | 0 == '0' -> ${zero == stringZero}`)

console.log(`Menor que (>) | 3.14 > 10 -> ${pi > dez}`)
console.log(`Maior que (<) | 3.14 < 10 -> ${pi < dez}`)
console.log(`Menor ou igual que (<=) | 3.14 <= 10 -> ${pi <= dez}`)
console.log(`Maior ou igual que (>=) | 3.14 >= 10 -> ${pi >= dez}`)