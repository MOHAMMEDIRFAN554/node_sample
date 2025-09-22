const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(" Connected to MongoDB"))
    .catch(err => console.error(" MongoDB connection error:", err));

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const authMiddleware = require("./middleware/authMiddleware");

app.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "Welcome to your profile!", user: req.user });
});

app.listen(process.env.PORT, () => {
    console.log(` Server running on port http://localhost:${process.env.PORT}`);
});
