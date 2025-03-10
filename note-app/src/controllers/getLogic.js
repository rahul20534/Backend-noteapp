const Note = require('../models/noteSchema');
const noteScheme = require('../models/noteSchema');

const getallnote = async (req,res) => {
    try {
        const userid = req.user.id;

        const note = await Note.find({user : userid});
        
        return res.status(200).json({ success: true, notes });

        
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = getallnote;