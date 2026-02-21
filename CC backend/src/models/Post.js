const monggoose = require("mongoose");
const postSchema = new monggoose.Schema(
    {
        connect: {
            type: String,
            required: true,
            maxlength: 1000,
        },
        category: {
            type: String,
            enum: ["announcement", "event", "lost_and_found", "study"],
            required: true,
        },
        author: {
            type: monggoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = monggoose.models.Post || monggoose.model("Post", postSchema);