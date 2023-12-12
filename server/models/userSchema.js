const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.KEY;

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    mobile: {
        type: String,
        required: true,
        maxlength: 10,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email address not valid");
            }
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
    carts: Array,
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

// generate auth token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, secretKey, {
            expiresIn: "1d",
        });
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        console.log("auth token generated");
        return token;
    } catch (error) {
        console.log("Error in generating Auth Token" + error);
    }
};

// add to cart
userSchema.methods.addToCart = async function (cart) {
    try {
        this.carts = this.carts.concat(cart);
        await this.save();
        console.log("item added to card");
        return this.carts;
    } catch (error) {
        console.log("error in addToCart" + error);
    }
};

const Users = new mongoose.model("USER", userSchema);

module.exports = Users;
