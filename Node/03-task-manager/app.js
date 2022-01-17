const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

require('dotenv').config()

// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use(notFound)
app.use(errorHandlerMiddleware)

// routes
app.use('/api/v1/tasks', tasks)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        app.listen(port, console.log(`Executando servidor na porta ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()
