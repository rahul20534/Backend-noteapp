const json = require('jsonwebtoken');

const authentication = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if(!token){
            return res.status(401).json({ message: "Access Denied: No Token Provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid Token", error: error.message });
    }
}

module.exports = authentication;