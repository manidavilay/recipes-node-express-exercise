const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    ingredients: {
      type: String,
      required: true,
    },
    servings: {
      type: Number,
      required: false,
    },
    steps: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe