require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");

const Products = require("./models/productSchema");
const DefaultData = require("./defaultData");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});

// DefaultData();