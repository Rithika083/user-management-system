const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/", userRoutes);
app.use("/api/auth", authRoutes);


mongoose.connect("mongodb://localhost:27017/mydb")
.then(() => {

    console.log("MongoDB Connected");

    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });

})
.catch((err) => {
    console.log(err);
});


