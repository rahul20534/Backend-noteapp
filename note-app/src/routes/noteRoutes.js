const express = require('express');
const protect = require('../middlewares/authentication');

const router = express.Router();

//this is for create note
router.post("/",protect,);

//this is for get all the created note for a user
router.get("/",protect,);

//this is for get only specefic note
router.get("/:id",protect,);

//this is for delete the note
router.delete("/:id",protect);

//this is for update te note
router.put("/:id",protect);

module.exports = router;
