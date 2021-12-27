const customExress = require('./config/custom-express')
const conexao = require('./infra/conexao')

conexao.connect((erro) => {
    if (erro) console.log(erro);
    else { 
        console.log('DB conectado com sucesso')
        
        const app = customExress()
        
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})

