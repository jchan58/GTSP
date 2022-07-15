require("dotenv").config();

//todo: Require routes
//todo: Require middleware

//Require cors/helmet/express
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");


//Express app
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());


app.get("/", (req, res) => {
    res.send("JHU-Nimbus API!");
});

//todo: add routing
//app.use(route1);
  
//todo: add error handling functionality
  
module.exports = app;