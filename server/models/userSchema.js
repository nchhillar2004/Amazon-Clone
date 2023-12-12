const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.KEY;

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


// generate auth token
userSchema.methods.generateAuthToken = async function(){
    try {
        let authToken = jwt.sign({_id:this._id}, secretKey);
        this.tokens = this.tokens.concat({token:authToken});
        await this.save();
        return authToken;
    } catch (error) {
        console.log("Error in generating Auth Token" + error);
    }
}


const Users = new mongoose.model("USER", userSchema);

module.exports = Users;