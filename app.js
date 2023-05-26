// Importing HTTP module
// import http from "http";

// Importing ExpressJS
import express from "express";

// Importing "http-status" library
// import httpStatus from "http-status";

// Importing the router
import adminRouter from "./routes/admin.routes.js";
import shopRouter from "./routes/shop.routes.js";
import errorRouter from "./routes/error.routes.js";

// Importing ROOT_DIR
import { ROOT_DIR } from "./helpers/paths.js";

// Importing path
import path from "path";

// Creating an Express instance
const app = express(); // (req, res) => { CODE }

// Client data parser Middleware
app.use(express.urlencoded({ extended: true }));

// We register the static files server middleware
app.use(express.static(path.join(ROOT_DIR, "public")));

// Adding admin router
app.use("/admin", adminRouter);

// Adding shop router
app.use(shopRouter);

// Adding error router
app.use(errorRouter);

// // Registering 404 ERROR middleware
// app.use((req, res) => {
//   res.status(httpStatus.NOT_FOUND).send(`
//   <h1 style="color: Crimson; text-align: center; font-size: 400%; margin: 3em 0 0 0;">404</h1>
//   <h1 style="color: Crimson; text-align: center; font-size: 400%; margin: 3em 0 0 0;">RESOURCE NOT FOUND</h1>
//   `);
// });

// Defining ports
const port = 3000;
const ip = "0.0.0.0";

// Running server
app.listen(port, ip, (err) => {
  console.log("🟢 Server listening in http://localhost:3000");
});
