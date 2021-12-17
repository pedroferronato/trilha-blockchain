const tabelaVerdadeAnd = [
    [false && false, false && true],
    [true && false, true && true]
]
console.log('===== Tabela Verdade (e &&)  =====')
console.table(tabelaVerdadeAnd)

const tabelaVerdadeOr = [
    [false || false, false || true],
    [true || false, true || true]
]
console.log('===== Tabela Verdade (ou ||)  =====')
console.table(tabelaVerdadeOr)