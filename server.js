"use strict";

import Express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = Express();
const port = 3000;
app.use(cors());
app.use(Express.json());

mongoose.connect('mongodb+srv://yonatandu:LGl7HEVXhQJaTqiP@cluster0.bhjh4.mongodb.net/sv-shop')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }],
    totalProducts: Number,
    totalPrice: Number,
});

const userModel = mongoose.model('users', userSchema);
const productModel = mongoose.model('products', productSchema);
const orderModel = mongoose.model('orders', orderSchema);

function adminCheck(req, res, next) {
    if (req.query.admin === "true") {
        next(); // Allow access to the route
    } else {
        res.status(400).send("<h1>Error: Unauthorized access</h1>");
    }
}

app.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const user = await userModel.findOne({ email, password });
        if (user) {
            res.status(200).json({ message: 'Welcome back!', user });
        } else {
            res.status(400).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email, and password are required" });
    }

    try {
        const user = await userModel.create({ name, email, password });
        res.status(200).json({ message: "User created successfully", user });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: "Email already exists" });
        }
        console.error("Error during sign-up:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/products', async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

app.get('/products/search/:prodName', async (req, res) => {
    const { prodName } = req.params;
    try {
        const products = await productModel.find({name: { $regex: prodName, $options: 'i' } });
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }
        else {
            res.status(200).json(products);
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

app.post("/buy", async (req, res) => {
    const { name, products } = req.body;

    if (!name || typeof name !== "string" || !products || products.length === 0) {
        return res.status(400).json({ error: "Invalid request. Ensure 'name' is a string and products exist." });
    }

    try {
        const user = await userModel.findOne({ name });

        if (!user) {
            console.error("Error: User not found in database:", name);
            return res.status(404).json({ error: "User not found in database" });
        }

        const order = await orderModel.create({
            user: user._id, // Store ObjectId reference
            products: products,
            totalProducts: products.length,
            totalPrice: products.reduce((total, product) => total + product.price, 0),
        });

        res.status(200).json({ message: "Order placed successfully" });

    } catch (error) {
        console.error("Error saving order to database:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get("/all", adminCheck, async (req, res) => {
    try {
        const orders = await orderModel.find().populate("user").populate("products");

        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});