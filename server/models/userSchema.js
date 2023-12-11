const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true,
    },
    code:{
        type:String,
        trim:true,
    },
    mobile:{
        type:String,
        trim:true,
        unique:true,
        maxlength:10,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Email address not valid")
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
    },
    tokens : [
        {
            token : {
                type:String,
                required:true,
            }
        }
    ],
    carts : Array
});

const Users = new mongoose.model("users", userSchema);

module.exports = Users;