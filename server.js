const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const recipeRoute = require("./Router/recipeRoute");
const userRoute = require("./Router/userRoute");
const client = require("./db");
const createTable = require("./query.js");

// configuring dotenv
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));

// connecting postgresql database

client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  } else {
    console.log("Connected successfully");
  }
});

// CORS Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: process.env.CORS_METHODS,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/recipe", recipeRoute);
app.use("/user", userRoute);

// Start the server
app.listen(process.env.PORT || 4000, () =>
  console.log(`server is running in Port ${process.env.PORT}...`)
);
