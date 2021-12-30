const customExress = require('./config/custom-express')
const conexao = require('./infra/database/conexao')
const tabelas = require('./infra/database/tabelas')

conexao.connect((erro) => {
    if (erro) console.log(erro);
    else { 
        console.log('DB conectado com sucesso')
        
        tabelas.init(conexao)
        
        const app = customExress()
        
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})

