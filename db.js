// const { Pool } = require("pg");
// const fs = require("fs")


// require("dotenv").config();

// // Connecting with postgresql database with credentials
// const pool = new Pool({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: process.env.DB_PASSWORD,
//   database:"recipe"
// });
// module.exports = pool;

const pg = require('pg');
const createTable = require('./query.js')


const conString = "postgres://kppmpnlu:YbmYA386mnSjNpXqUqBymDXox5TK_txf@peanut.db.elephantsql.com/kppmpnlu" //Can be found in the Details page
const client = new pg.Client(conString);
// client.connect();




module.exports=client
