const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    subject: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fileName: {
        type: String,
        required: true,
    },
    filepath: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Note || mongoose.model('Note', noteSchema);