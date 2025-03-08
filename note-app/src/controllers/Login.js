const User = require('../models/userSchema');
const bcrypt  = require("bcryptjs");

const Login = async (req,res) =>{
    try {
        const {Email,Password} = req.body;
        const user = await User.findone({Email});
        if(!user){
            return res.status(400).json({ message: "Invalid email or password" });
        }else{
            
            const ispassword = await bcrypt.compare(Password,user.Password);
            if(!ispassword){
                return res.status(400).json({ message: "Invalid email or password" });
            }
            const token = jwt.sign(
                { userId: user._id, email: user.Email },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
    
            res.status(200).json({ message: "Login successful", token });
        }
        
    } catch (error) {
        return res.status(500).json({message: "Error logging in", error: error.message})
    }

}
module.exports = Login;