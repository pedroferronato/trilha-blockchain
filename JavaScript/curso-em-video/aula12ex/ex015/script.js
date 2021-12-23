function verificar() {
    var ano = new Date().getFullYear()
    
    let campoAno = document.getElementById('txtano')
    let resultado = document.getElementById('resultado')

    if (campoAno.value.length == 0 || Number(campoAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let sexo = document.getElementsByName('radsex')
        let idade = ano - Number(campoAno.value)
        let genero= ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'https://images.pexels.com/photos/8430058/pexels-photo-8430058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350')
            } else if (idade < 21) {
                img.setAttribute('src', 'https://images.pexels.com/photos/8451911/pexels-photo-8451911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350')
            } else if (idade < 50) {
                img.setAttribute('src', 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350')
            } else {
                img.setAttribute('src', 'https://images.pexels.com/photos/2385044/pexels-photo-2385044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350')
            }
        }
        if (sexo[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'https://images.pexels.com/photos/2276589/pexels-photo-2276589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350')
            } else if (idade < 21) {
                img.setAttribute('src', 'https://images.pexels.com/photos/3058391/pexels-photo-3058391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350')
            } else if (idade < 50) {
                img.setAttribute('src', 'https://images.pexels.com/photos/3021563/pexels-photo-3021563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350')
            } else {
                img.setAttribute('src', 'https://images.pexels.com/photos/3024605/pexels-photo-3024605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350')
            }
        }
        resultado.innerHTML = ''

        resultado.style.textAlign = 'center'
        resultado.innerHTML += `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
}

const botao = document.getElementById('botao')

botao.addEventListener('click', verificar)