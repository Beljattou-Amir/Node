const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    _id: {
       type: mongoose.ObjectId,
       required: true
    },
    description:{
        type: String,
        required: true
    },
    faite:{
        type: Boolean,
        required: true
    } ,
    
})

module.exports = mongoose.model('Task', taskSchema)