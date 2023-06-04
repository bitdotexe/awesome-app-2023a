import { Router } from "express";
import {
  getAddProduct,
  postAddProduct,
} from "../controllers/products.controller.js";

const router = Router();

// GET /admin/add-product
router.get("/add-product", getAddProduct);

// POST /admin/add-product
router.post("/add-product", postAddProduct);

export default router;
