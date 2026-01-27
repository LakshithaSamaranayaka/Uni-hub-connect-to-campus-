const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth || !auth.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        const token = auth.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Not authorized, invalid token" });
    }
};

const adminOnly = (req, res, next) => {
    if (req.user?.role !== "admin") {
        return res.status(403).json({ message: "Access denied, admin only" });
    }
    next();
};

module.exports = { protect, adminOnly };