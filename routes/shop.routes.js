import { Router } from "express";
import { getProducts } from "../controllers/products.controller.js";

const router = Router();

// GET /
router.get("/", getProducts);

// GET /about
router.get("/about", (req, res) => {
  console.log("✔ Serving '/about' route");
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

export default router;
