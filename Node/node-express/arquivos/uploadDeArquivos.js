const fs = require('fs')

fs.createReadStream('./assets/salsicha.jpg') // Async image stream reading 
    .pipe(fs.createWriteStream('./assets/salsicha-stream.jpg')) // Função a ser executada com base na ReadStream 
    .on('finish', () => console.log('Imagem foi escrita com sucesso')) // Callback baseado em trigger ('Finish')