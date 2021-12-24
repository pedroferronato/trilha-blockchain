function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora != 1) msg.innerHTML = `Agora são ${hora} horas`
    else msg.innerHTML = `Agora é ${hora} hora`

    if (hora >= 0 && hora < 12) {
        img.src = 'https://images.pexels.com/photos/8901302/pexels-photo-8901302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'https://images.pexels.com/photos/2437286/pexels-photo-2437286.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350'
        document.body.style.background = '#515154'
    }
}

carregar()