const express = require("express")
const router = express.Router()
const { getAllRecipes, getSingleRecipe, createRecipe, updateRecipe, deleteRecipe } = require("../controllers/recipe.controller")

// Get all recipes route
router.get("/", getAllRecipes)

// Get single recipe route
router.get("/:id", getSingleRecipe)

// Create recipe route
router.post("/", createRecipe)

// Update recipe route
router.put("/:id", updateRecipe)

// Delete recipe route
router.delete("/:id", deleteRecipe)

module.exports = router