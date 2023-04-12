const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please input a title ']
    },
    desc:{
        type:String,
        required:[true,'please input a description']
    }
},{timestamps:true})

module.exports = mongoose.model('noteDb',noteSchema)