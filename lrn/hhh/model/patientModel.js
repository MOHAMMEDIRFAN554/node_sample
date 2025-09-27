const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:true
    },
    bloodGroup:{
        type:String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('patient',patientSchema)
