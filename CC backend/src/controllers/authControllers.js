const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const signToken = (user) => 
    jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
     
    if  (!name || !email || !password) {
        return res.status(400).json({ message: "Please provide name, email and password" });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: "User already exists" });
    
    const hashed = await bcrypt.hash(password, 12);

    const user = await User.create({ name, email, password: hashed });
    const token = signToken(user);
    res.status(201).json({ 
        token,
        user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = signToken(user);
    res.json({ 
        token,
        user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
    }