// Importing the ExpressJS router
import { Router } from "express";
// Importing the Router manager
import path from "path";

// Creating an Express router instance
const router = Router();

// GET /
router.use("", (req, res) => {
  console.log("✔ Serving the 'error' route");
  res.sendFile(path.resolve("views", "404.html"));
});

export default router;
