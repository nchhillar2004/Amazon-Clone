const jwt = require("jsonwebtoken");
const Users = require("../models/userSchema");
const secretKey = "nchhillar"

const authenticate = async(req, res, next)=>{
    try {
        const token = req.cookies.Amazonweb;

        const verifyToken = jwt.verify(token, secretKey);
        console.log(verifyToken);

        const rootUser = await Users.findOne({_id:verifyToken._id, "tokens.token":token});
        console.log(rootUser);

        if(!rootUser){
            throw new Error("User not found");
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    } catch (error) {
        res.status(401).send("Unauthorised user: no token provided");
        console.log("Error in authenticate " + error);
    }
}

module.exports = authenticate;
