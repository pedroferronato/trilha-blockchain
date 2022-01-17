const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O nome do produto deve ser inserido']
    },
    price: {
        type: Number,
        required: [true, 'O preço do produto deve ser inserido']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} não é válido',
        }
    }
})

module.exports = mongoose.model('Product', productSchema)
