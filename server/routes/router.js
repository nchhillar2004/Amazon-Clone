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
})


module.exports = router;