// Project by NISHANT CHHILLAR
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`➜ Server is running on http://localhost:${PORT}`);
});

// DefaultData();