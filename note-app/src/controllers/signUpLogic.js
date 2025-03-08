const User = require('../models/userSchema');

const bcrypt  = require("bcryptjs");

const userSign = async (req,res) => {
    try {
        const {Name,Email, Password, Gender} = req.body;

        //check that user is already rasister or not
        const existRasister = await User.findone({Email});
        if(existRasister){
            return res.status(400).json({message : "User is already rasister"});
        }else{
            //encrypt the password before saving in db
            const encryptpassword = await bcrypt.hash(Password,10);

            //create the newuser to save the data in db

            const newUser = new User({
                Name,
                Email,
                Password : encryptpassword,
                Gender
            });

            await newUser.save();

            return res.status(201).json({ message: "User registered successfully" });

        }
        

        
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
}

module.exports = userSign