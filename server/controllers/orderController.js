import Order from "../models/orderModel.js";
import User from "../models/userModel.js";

//Place an Order
export const sendOrder = async (req, res) => {
    const { name, products } = req.body;

    if (!name || !products || products.length === 0) {
        return res.status(400).json({ error: "Invalid request" });
    }

    try {
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await Order.create({
            user: user._id,
            products: products,
            totalProducts: products.length,
            totalPrice: products.reduce((total, product) => total + product.price, 0),
        });

        res.status(200).json({ message: "Order placed successfully" });
    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get All Orders (Admin)
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("user").populate("products");
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
