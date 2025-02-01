import express from "express";
import { sendOrder, getAllOrders } from "../controllers/orderController.js";
import adminCheck from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/buy", sendOrder);
router.get("/all", adminCheck, getAllOrders);

export default router;
