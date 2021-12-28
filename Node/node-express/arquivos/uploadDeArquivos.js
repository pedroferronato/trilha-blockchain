const fs = require('fs')
const path = require('path')

module.exports = (caminho, arquivo, callback) => {
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoInvalido = tiposValidos.indexOf(tipo.substring(1)) === -1

    if (tipoInvalido) {
        const erro = {erro: 'Tipo é inválido'}
        callback(erro)
    } else {
        const novoCaminho = `./assets/images/${arquivo}${tipo}`
    
        fs.createReadStream(caminho) // Async image stream reading 
            .pipe(fs.createWriteStream(novoCaminho)) // Função a ser executada com base na ReadStream 
            .on('finish', () => callback(false, novoCaminho)) // Callback baseado em trigger ('Finish')
    }


}