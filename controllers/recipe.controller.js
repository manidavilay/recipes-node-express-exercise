const Recipe = require("../models/recipe.model")

// Get all recipes api
const getAllRecipes = async (req, res) => {
    try {
        const recipe = await Recipe.find({})
        if (!recipe) {
            res.status(404).json({ message: "There are no recipes yet !" })
        }
        res.status(200).json(recipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get recipe by id api
const getSingleRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        if (!recipe) {
            res.status(404).json({ message: "Recipe not found !" })
        }
        res.status(200).json(recipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Create recipe api
const createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body)
        res.status(200).json(recipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Update recipe api
const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findByIdAndUpdate(id, req.body)
        if (!recipe) {
            res.status(404).json({ message: "Recipe has not been found !" })
        }
        const updatedRecipe = await Recipe.findById(id)
        res.status(200).json(updatedRecipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Delete recipe api
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findByIdAndDelete(id)
        if (!recipe) {
            res.status(404).json({ message: "Recipe has not been found !" })
        }
        res.status(200).json({ message: "Recipe has been successfully deleted !" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllRecipes,
    getSingleRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}