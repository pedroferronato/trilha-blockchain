console.log('===== Console =====')

//console.trace()

/*
Trace
    at Object.<anonymous> (C:\Users\pedro\Documentos\Projetos\trilha-blockchain\JavaScript\tipos-variaveis-funcoes\console.js:1:9)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/
console.time()

let lista = [{ nome: "Pedro", idade: 20 }, { nome: "Diego", idade: 29 }]
console.log('===== Console Table  =====')
console.table(lista)
console.timeLog()
lista = [1, 2, 3]
console.table(lista)

console.timeEnd()
