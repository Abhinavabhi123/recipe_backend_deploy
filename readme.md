
## Node.js application for Recipe app



This Node.js server provides the essential server functionality for the recipe website, enabling seamless interaction with the platform's features and content.

## Key Features
* **Using Express.js frame work.**
* **Postgresql in Node.js server.**
* **Middle ware for user authentication.**
* **Implements JWT token-based authorization.**
* **Follows MVC Architecture**
* **Rest ful API**


## Requirements

* Node 15 and above
* NPM 8 and above
* postgresql(pg-Admin, SQL-shell)

## Common setup

<ol>
  <li>Create new folder</li>
  <li>Open code editor(eg. vs code) in the newly created folder </li>
  <li>Open Terminal</li>
</ol>

Enter the command in the terminal
```bash
git init 
```

Clone the repo and install the dependencies.

```bash
git clone https://github.com/Abhinavabhi123/recipe_for_you_backend.git
cd Recipe_Backend
```

```bash
npm install
```
---
* Open SQL shell 
* Enter your postgresql user name and password for get access to the        database.
* Open <em><strong> database.sql</strong></em> folder 
* Run the SQL command one by one
  ```apache
  CREATE DATABASE  recipe;
    ```
  ```apache
  \c recipe;
  ```
  ```apache
      CREATE TABLE  users (
      id serial PRIMARY KEY NOT NULL,
      name VARCHAR (80) NOT NULL,
      email VARCHAR (100) NOT NULL,
      image  VARCHAR (200) NOT Null,
      recipes text[] UNIQUE 
     );
  ```

# Environment Variables

This project uses environment variables to store sensitive information and configuration options. You can use the `dotenv` package to load environment variables from a `.env` file in your project directory. Once you have loaded the environment variables, you can reference them in your code using `process.env.VARIABLE_NAME`.

## Setup .env file

Create `.env` file in the current project directory,

```armasm
PORT = your_server_port_here //eg:- PORT:4000
CORS_ORIGIN= frontend URL here
CORS_METHODS= GET,POST,PUT,DELETE //use these methods
PRODUCTS_BASE_URL = https://api.spoonacular.com/recipes/ //Third party api to get recipe data.
API_KEY = your_api_key_of the above mentioned API provider
DB_PASSWORD = your_postgresql_database_password
USER_JWT_SECRET = your_JWT_secret_here

```



## Start server

To start the express server, run the following command in the terminal

```bash
npm start
```
Then,

The server will run in [http://localhost:4000](http://localhost:400), There you can see the successful message in the terminal 

<br>
<br>
<br>
<br>
