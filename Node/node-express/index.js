const customExress = require('./config/custom-express')

const app = customExress()

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
