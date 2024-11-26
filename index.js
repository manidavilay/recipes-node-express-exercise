const express = require("express")
const mongoose = require("mongoose")
const Recipe = require("./models/recipe.model")
require("dotenv").config()

const app = express()

// Middleware
app.use(express.json())

const port = process.env.PORT || 3000
const DBConnectionString = process.env.MONGODB_URI

app.get("/", (req, res) => {
    res.send("This is from node API")
})

app.listen(port, () => {
    console.log("Server is running on port 3000")
})

// Get all recipes API
app.get("/api/recipes", async (req, res) => {
    try {
        const recipe = await Recipe.find({})
        res.status(200).json(recipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Create recipe API
app.post("/api/recipes", async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body)
        res.status(200).json(recipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

mongoose.connect(DBConnectionString)
.then(() => {
    console.log("Connected to database !")
}).catch(() => {
    console.log("Connection failed")
})