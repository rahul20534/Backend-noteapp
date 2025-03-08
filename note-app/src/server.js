//this is importing envioment valurable and config is method in dotenv not config folder
require('dotenv').config();

//importing app.js in server.js
const app = require('./app');

//importing database.js file which has db connection
const connectDB = require('./config/database');

//this is defining the port and taking port value form env and  || 5000 means saying or condition when this not work use 5000.
const PORT = process.env.PORT || 4000; 

//connect to db before start the server
connectDB();


//then will listen the express app or start it.
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`)
})


