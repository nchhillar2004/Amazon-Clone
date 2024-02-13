// Project by NISHANT CHHILLAR
require("dotenv").config();
require("./db/conn");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes/router");
const DefaultData = require("./defaultData");

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`➜ Server is running on http://localhost:${PORT}`);
});

// DefaultData();