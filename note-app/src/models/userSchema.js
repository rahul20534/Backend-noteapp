const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required : true,
        trim : true
    },
    Password : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    Email : {
        type:String,
        required : true,
        lowercase : true,
        unique:true
    },
    Gender  : {
        type : String,
        required:true,
        enum: ["male", "female", "other"]
    }
},{
    timestamps :true
})

const User = mongoose.model('User',userSchema);

module.exports = User;