// Importing the ExpressJS router
import { Router } from "express";
import { read } from "fs";
// Importing the Router manager
import path from "path";

// Creating an Express router instance
const router = Router();

// GET /
router.use("", (req, res) => {
  console.log("✔ Serving the 'error' route");
  res.render("404");
});

export default router;
