const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

const DBConnectionString = process.env.MONGODB_URI

app.get("/", (req, res) => {
    res.send("This is from node API")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

mongoose.connect(DBConnectionString)
.then(() => {
    console.log("Connected to database !")
}).catch(() => {
    console.log("Connection failed")
})