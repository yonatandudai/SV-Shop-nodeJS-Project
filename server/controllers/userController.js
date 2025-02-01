import User from "../models/userModel.js";

// User Login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).json({ message: "Welcome back!", user });
        } else {
            res.status(400).json({ error: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error during sign-in:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

// User Sign Up
export const signupUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const user = await User.create({ name, email, password });
        res.status(200).json({ message: "User created successfully", user });
    } catch (error) {
        console.error("Error during sign-up:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
