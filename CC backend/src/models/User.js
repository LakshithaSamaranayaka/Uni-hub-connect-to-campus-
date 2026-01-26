const monggoose = require('mongoose');

const userSchema = new monggoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            select: false,
        },
        role: {
            type: String,
            enum: ['student', 'admin'],
            default: 'student'
        },
    },
    { timestamps: true }
);

module.exports = monggoose.model("User", userSchema);