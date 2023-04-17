const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'please input a valid email'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'please input a valid password']
    }
},{timestamps:true})

module.exports = mongoose.model('userDb',userSchema)