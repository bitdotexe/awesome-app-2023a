// Importing the ExpressJS router
import { Router } from "express";
// Importing the Router manager
import path from "path";

// Creating an Express router instance
const router = Router();

// GET /add-product
router.get("/add-product", (req, res, next) => {
  // Serving the form
  console.log("✔ Serving the form...");
  res.sendFile(path.resolve("views", "add-product.html"));
});

// POST /add-product
router.post("/add-product", (req, res) => {
  // Making the parameter extraction inside of the petition
  console.log(req.body);
  res.redirect("/");
});

// Exporting the admin router
export default router;
