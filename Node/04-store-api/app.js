require('dotenv').config();
require('express-async-errors')

const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const router = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())

// routes
app.use('/api/v1', router)

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Servidor executando na porta ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()
