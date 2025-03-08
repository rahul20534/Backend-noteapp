//importing mongoose
const mongoose = require('mongoose');
//importing dotenv
const dotenv = require('dotenv').config();


//setup the databse connection

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MongoDB_URL);
        console.log("Mongo is connection succesfilly");
    } catch (error) {
        console.log("MongoDB is not connect",error.message);
        //this is the main line when the databse connection fail then we need to exit from process as well means stop the execution of app(app.js) 
        // because connection fail and terminate the process.
        process.exit(1);
    }
}

module.exports = connectDB;