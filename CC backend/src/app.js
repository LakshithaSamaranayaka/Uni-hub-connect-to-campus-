const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const authRouter = require("./router/authRouter");      
const postRouter = require("./router/postRouter");

const app = express();

// Security + logs
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Rate limit (basic , professional)
app.use(
    "/api/",
    rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 200, // limit each IP to 200 requests per windowMs
    })
);

// Health check
app.get("/api/health", (req, res) => {
    res.json({ status: "OK", message: "Campus Connect API is running." });
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

module.exports = app;