// Importing the ExpressJS router
import { Router } from "express";
// Importing the Router manager
import path from "path";
//Importing ROOT_DIR
import { ROOT_DIR } from "../helpers/paths.js";

// Creating an Express router instance
const router = Router();

// GET /admin/add-product
router.get("/add-product", (req, res, next) => {
  // Serving the form
  console.log(`ROOT_DIR: ${ROOT_DIR}`);
  console.log("✔ Serving the form...");
  res.sendFile(path.join(ROOT_DIR, "views", "add-product.html"));
});

// POST /admin/add-product
router.post("/add-product", (req, res) => {
  // Making the parameter extraction inside of the petition
  console.log(req.body);
  res.redirect("/");
});

// Exporting the admin router
export default router;
