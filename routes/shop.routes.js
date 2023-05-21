// Importing the ExpressJS router
import { Router } from "express";
// Importing the Router manager
import path from "path";

// Creating an Express router instance
const router = Router();

// GET /
router.get("/", (req, res) => {
  console.log("✔ Serving the '/' route");
  res.sendFile(path.resolve("views", "shop.html"));
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
