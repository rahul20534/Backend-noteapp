const Note = require("../models/Note");

const createNote = async (req,res) =>{
    try {
        const {content,title} = req.body;
        const userid = req.user.userid

        if(!title || !content){
            return res.status(400).json({ message: "Title and content are required" });
        }

        const newNote = new Note({
            title,
            content,
            user:userid
        })
        await newNote.save();

        return res.status(201).json({ message: "Note created successfully", note: newNote });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = createNote;