const mongoose = require("mongoose");

const URI = process.env.URI;

try {
    mongoose
        .connect(URI)
        .then(() => console.log("➜ Database connected"))
        .catch((error) => console.log("error" + error.message));
} catch (error) {
    console.log(error);
}
