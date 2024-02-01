const Users = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const authenticate = async(req, res, next)=>{
    try {
        try {
            const token = req.cookies.amazon;
            console.log("token - "+token);
            const verifyToken = jwt.verify(token, 'nchhillar');
            console.log("verify token - "+verifyToken);

            const rootUser = await Users.findOne({_id:verifyToken._id, "tokens.token":token});
            // console.log(rootUser);
            if(!rootUser){
            throw new Error("User not found");
            }
            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;
        } catch (error) {
            console.log("error inside authenticate try" + error);   
        }
        next();
    } catch (error) {
        res.status(401).send("Unauthorised user: no token provided");
        console.log("Error in authenticate " + error);
    }
}

module.exports = authenticate;
