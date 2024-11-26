const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

const port = process.env.PORT || 3000
const DBConnectionString = process.env.MONGODB_URI

app.get("/", (req, res) => {
    res.send("This is from node API")
})

app.listen(port, () => {
    console.log("Server is running on port 3000")
})

mongoose.connect(DBConnectionString)
.then(() => {
    console.log("Connected to database !")
}).catch(() => {
    console.log("Connection failed")
})