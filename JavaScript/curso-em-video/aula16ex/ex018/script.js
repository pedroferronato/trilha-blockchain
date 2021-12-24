let res = document.getElementById('resultado')
let lista = document.getElementById('lista')
let valores = []

function adicionar() {
    let numero = document.getElementById('numero')

    let num = Number(numero.value)
    if (isNumero(num) && !inLista(num, valores)) {
    
        if (num < 1 || num > 100) {
            alert('[ERRO] Insira somente números entre 1 e 100')
            return
        }

        valores.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)

        numero.value = ''
        numero.focus()
        
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }

}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) return true
    return false
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes do finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            if (valores[pos] > maior) maior = valores[pos]
            if (valores[pos] < menor) menor = valores[pos]
            soma += valores[pos]
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}


document.getElementById('btn-adicionar').addEventListener('click', adicionar)

document.getElementById('btn-finalizar').addEventListener('click', finalizar)