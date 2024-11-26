const express = require("express")
const mongoose = require("mongoose")
const recipeRoute = require("./routes/recipe.route")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 3000
const DBConnectionString = process.env.MONGODB_URI

// Middleware
app.use(express.json())
app.use("/api/recipes", recipeRoute)

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