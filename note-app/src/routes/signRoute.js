const express = require('express');
const signUpLogic = require('../controllers/signUpLogic');
const authentication = require('../middlewares/authentication');


const router = express.Router();

router.post('/signup',signUpLogic);

router.get("/profile", authenticateUser, (req, res) => {
    res.json({ message: "Access granted", user: req.user });
});

module.exports = router;

