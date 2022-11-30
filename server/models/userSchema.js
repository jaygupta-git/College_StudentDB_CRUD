const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    regNo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    doa:{
        type:String,
        required:true
    },
    yoa:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    field:{
        type:String,
        required:true
    }
})

const users = new mongoose.model("users",userSchema);

module.exports = users;


