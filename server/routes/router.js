const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const Users = require("../models/userSchema");


// get products data api
router.get("/getproducts", async(req, res)=>{
    try {
        const productsData = await Products.find();
        // console.log("console the data " + productsData);
        res.status(201).json(productsData);
    } catch (error) {
        console.log("error" + error.message);
    }
});

// get individual product data api
router.get("/getproductsone/:id", async(req, res)=>{
    try {
        const {id} = req.params; 
        const individualData = await Products.findOne({id:id});
        res.status(201).json(individualData);
        // console.log(individualData);
    } catch (error) {
        res.status(400).json(individualData);
        console.log("error" + error.message);
    }
});


// register user
router.post("/register", async(req, res)=>{
    // console.log(req.body);

    const {fname, mobile, email, password} = req.body;

    if(!fname || !mobile || !email || !password){
        res.status(422).json({error:"fill the all data"});
        console.log("no data available");
    };


    try {
        const preUser = await Users.findOne({email:email});

        if(preUser){
            res.status(422).json({error:"user already exists"});
        }else{
            const finalUser = new Users({
                fname, mobile, email, password
            });
            
            
            const storeData = await finalUser.save();
            console.log(storeData);
            res.staus(201).json(storeData);
        }

    } catch (error) {
        
    }
});
 

module.exports = router;