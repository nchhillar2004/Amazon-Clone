const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true,
    },
    mobile:{
        type:String,
        required:true,
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


userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});



const Users = new mongoose.model("USER", userSchema);

module.exports = Users;