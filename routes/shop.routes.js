// Importing the ExpressJS router
import { Router } from "express";

// Creating an Express router instance
const router = Router();

// Importing products
import { products } from "./admin.routes.js";

// GET /
router.get("/", (req, res) => {
  console.log(products);
  console.log("✔ Serving the '/' route");
  res.render("shop", {
    shop: "active",
    docTitle: "Shop",
    products,
    viewStyle: "/css/product.css",
  });
});

// GET /about
router.get("/about", (req, res) => {
  console.log("✔ Serving the '/about' route");
  // Response to the server
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

export default router;
