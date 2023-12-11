const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");

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


module.exports = router;