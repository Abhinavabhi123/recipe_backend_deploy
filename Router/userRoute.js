const express = require("express");
const userRoute = express()
const {userLogin}  = require("../Controller/userController")

// user routes
userRoute.post("/userLogin",userLogin)

module.exports = userRoute;