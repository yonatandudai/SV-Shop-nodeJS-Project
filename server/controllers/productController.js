import Product from "../models/productModel.js";

// Get All Products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

// Search Products
export const searchProducts = async (req, res) => {
    const { prodName } = req.params;
    try {
        const products = await Product.find({ name: { $regex: prodName, $options: "i" } });
        res.status(200).json(products);
    } catch (error) {
        console.error("Error searching products:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};
