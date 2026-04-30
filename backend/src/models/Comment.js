const monggoose = require('mongoose');
const commentSchema = new monggoose.Schema(
    {
        text: {
            type: String,
            required: true,
            maxlength: 500,
        },
        post: {
            type: monggoose.Schema.Types.ObjectId,
            ref: "Post",
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

module.exports = monggoose.models.Comment || monggoose.model("Comment", commentSchema);