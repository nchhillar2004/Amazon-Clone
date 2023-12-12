const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const Users = require("../models/userSchema");
const bcrypt = require("bcryptjs");

// get products data api
router.get("/getproducts", async (req, res) => {
    try {
        const productsData = await Products.find();
        // console.log("console the data " + productsData);
        res.status(201).json(productsData);
    } catch (error) {
        console.log("error" + error.message);
    }
});

// get individual product data api
router.get("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const individualData = await Products.findOne({ id: id });
        res.status(201).json(individualData);
        // console.log(individualData);
    } catch (error) {
        res.status(400).json(individualData);
        console.log("error" + error.message);
    }
});

// register user
router.post("/register", async (req, res) => {
    // console.log(req.body);

    const { fname, mobile, email, password } = req.body;

    if (!fname || !mobile || !email || !password) {
        res.status(422).json({ error: "fill the all data" });
        console.log("no data available");
        return;
    }

    try {
        const preUser = await Users.findOne({ email: email });

        if (preUser) {
            res.status(409).json({ error: "user already exists" });
        } else {
            try {
                const finalUser = new Users({
                    fname,
                    mobile,
                    email,
                    password,
                });

                const storeData = await finalUser.save();
                // console.log(storeData);
                res.status(201).json({
                    message: "User created successfully",
                    data: storeData,
                });
            } catch (error) {
                res.status(500).json({ error: "Server error" });
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});



// Login user api
router.post("/login", async(req, res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        res.status(400).json({error:"fill all fields"});
    };

    try {
        const userLogin = await Users.findOne({email:email})

        if(userLogin){
            const isMatchPassword = await bcrypt.compare(password, userLogin.password);

            // generate token 
            const token = await userLogin.generateAuthToken();
            console.log(token);
            
            if(!isMatchPassword){
                res.status(401).json({error:"Invalid details"});
            }else{
                res.status(201).json({message:"password match"});
            }
        }else{
            res.status(404).json({error:"Email not registered"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Login server error"});
    }
})




module.exports = router;
