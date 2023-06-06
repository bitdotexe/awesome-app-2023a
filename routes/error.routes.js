// Importing the ExpressJS router
import { Router } from "express";
import { notFoundError } from "../controllers/httpError.controller.js";

// Creating an Express router instance
const router = Router();

// GET /
router.use(notFoundError);

export default router;
