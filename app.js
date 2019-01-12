const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

//passport config 
require("./config/passport")(passport);

const app = express();

app.get("/", (req, res) => {
    res.send("it Works");
});

//Load Routes
const auth = require("./routes/auth");

//Use Routes
app.use("/auth", auth);

const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})