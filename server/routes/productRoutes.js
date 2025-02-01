import express from "express";
import { getProducts, searchProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:prodName", searchProducts);

export default router;
