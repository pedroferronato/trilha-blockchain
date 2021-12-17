const lista = [0, 150, 30, 20, -8, -200]

console.log('===== Lista ([0, 150, 30, 20, -8, -200]) =====')

console.log('Math.min(lista) = ' + Math.min(...lista)) // ... operador de spread
console.log('Math.max(lista) = ' + Math.max(...lista))

console.log('===== Valores aleatórios =====')
console.log('1. Math.random() = ' + Math.random())
console.log('2. Math.random() = ' + Math.random())
console.log('3. Math.random() = ' + Math.random())

console.log('===== Potência e raiz =====')
console.log('Math.pow(4, 2) = ' + Math.pow(4, 2))
console.log('4 ** 2 = ' + 4 ** 2)
console.log('Math.sqrt(64) = ' + Math.sqrt(64))
console.log('64 ** (1/2) = ' + 64 ** (1/2))
console.log('19683 ** (1/3) = ' + 19683 ** (1/3))
console.log('Math.SQRT1_2 = ' + Math.SQRT1_2)
console.log('Math.SQRT2 = ' + Math.SQRT2)

console.log('===== Arredondamento =====')
console.log('Math.round(4.3) = ' + Math.round(4.3))
console.log('Math.round(3.85) = ' + Math.round(3.85))
console.log('Math.round(2.5) = ' + Math.round(2.5))

console.log('Math.ceil(5.2) = ' + Math.ceil(5.2))

console.log('Math.floor(5.2) = ' + Math.floor(5.2))

console.log('===== Truncate =====')
console.log('Math.trunc(4.8) = ' + Math.trunc(4.8))
console.log('Math.trunc(4.3) = ' + Math.trunc(4.3))