const express = require("express");
const recipeRoute = express()

const {getDetails,getRecipeDetails,addFavorite,favoriteRecipes}= require("../Controller/recipeController");

// user authentication middleware
const Auth = require("../Middleware/Auth");

// recipe routes
recipeRoute.get("/getRecipe",getDetails)
recipeRoute.get("/getRecipe/:id",getRecipeDetails)
recipeRoute.post("/addRecipeFav",Auth,addFavorite)
recipeRoute.get("/favoriteRecipes",Auth,favoriteRecipes)



module.exports = recipeRoute;