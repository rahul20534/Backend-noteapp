const mongoose = require('mongoose');

const noteSchema = new mongoose({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },

    Title: {
        type: String,
        required: true,

    },

    content: {
        type: String,
        required: true,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
},
{ timestamps: true }
)

const Note = mongoose.model("Note",noteSchema);
module.exports = Note;