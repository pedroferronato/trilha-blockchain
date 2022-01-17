const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Deve informar o nome da tarefa'],
        trim : true,
        maxLength : [20, 'Nome não deve ter mais de 20 caracteres']
    },
    completed : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Task', TaskSchema)