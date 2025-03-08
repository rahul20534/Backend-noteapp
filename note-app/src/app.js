//importing express
const express = require('express');
//importing cors
const cors = require('cors');
//importing body-parser
const bodyParser = require('body-parser');

//we are creating app using express here because server.js should empty so we will not mesup things
const app = express();

//setup middlewares
//this is adding cors use for connecting frontend and backend communication means frontend running at host of 3000 and backend
//is running at 4000 so if cors is here then communication between different port not happen 
app.use(cors());

//so this will help to get the data in json and convert into javascript object.
app.use(bodyParser.json());

//this is 
app.use(bodyParser.urlencoded({extended : true}));

module.exports = app;