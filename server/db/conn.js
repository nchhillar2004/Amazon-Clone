const mongoose = require("mongoose");

const URI = process.env.URI;

mongoose.connect(URI).then(()=>
    console.log('database connected')
).catch((error)=> console.log("error" + error.message))