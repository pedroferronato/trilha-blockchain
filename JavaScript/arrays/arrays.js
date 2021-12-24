let lista = [42, 64, 255, 18555]
let listaSimples = [1, 2, 3, 1]

console.log('===== Lista 1 =====')
console.log(lista)
console.log('===== Lista Simples =====')
console.log(listaSimples)
console.log('===== Concat =====')
console.log(lista.concat(listaSimples)) // Não altera o array
console.log('===== Filter (>= 100) =====')
console.log(lista.filter((elemento) => elemento >= 100)) // Não altera o array
console.log('===== Find (>= 100) =====')
console.log(lista.find((elemento) => elemento >= 100)) // Retorna o primeiro encontrado
console.log('===== FindIndex (>= 100) =====')
console.log(lista.findIndex((elemento) => elemento >= 100)) // Retorna o índice encontrado
console.log('===== IndexOf (64) =====')
console.log(lista.indexOf(64)) // Retorna o elemento encontrado
console.log('===== IndexOf (-64) =====')
console.log(lista.indexOf(-64)) // Retorna -1 para não encontrado
console.log('===== listaSimples.lastIndexOf(1) =====')
console.log(listaSimples.lastIndexOf(1)) 
console.log('===== ForEach =====')
lista.forEach((elemento) => console.log(elemento));
console.log('===== listaSimples.pop() =====')
console.log(listaSimples.pop()) 
console.log(listaSimples)
console.log('===== listaSimples.shift() =====')
console.log(listaSimples.shift()) 
console.log(listaSimples)
console.log('===== listaSimples.push(1) =====')
console.log(listaSimples.push(1)) 
console.log(listaSimples)
console.log('===== listaSimples.unshift(1) =====')
console.log(listaSimples.unshift(1)) 
console.log(listaSimples)
console.log('===== listaSimples.reduce("soma") =====')
console.log(listaSimples.reduce((anterior, atual) => atual += anterior, 0)) 
console.log('===== listaSimples.reverse() =====')
console.log(listaSimples.reverse())
console.log('===== lista.slice(1, lista.length - 1) =====')
console.log(lista.slice(1, lista.length - 1))
console.log('===== listaSimples.sort() =====')
console.log(listaSimples.sort())
console.log('===== listaSimples.splice() =====')
console.log(listaSimples.splice(0, 2))
console.log('listaSimples: ' + listaSimples)