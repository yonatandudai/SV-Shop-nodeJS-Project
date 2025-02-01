"use strict";

import Express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import config from "./config/env.js"; 
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// initialize Express
const app = Express();

//middleware
app.use(cors());
app.use(Express.json());

//connect to MongoDB
connectDB();

//routes
app.use("/", userRoutes);
app.use("/products", productRoutes);
app.use("/", orderRoutes);

//start server
app.listen(config.port, () => {
    console.log(`🚀 Server is running on http://localhost:${config.port}`);
});
