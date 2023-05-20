// Importing HTTP module
// import http from "http";

// Importing ExpressJS
import express from "express";

// Importing the router
import adminRouter from "./routes/admin.routes.js";
import shopRouter from "./routes/shop.routes.js";

// Creating an Express instance
const app = express(); // (req, res) => { CODE }

// Client data parser Middleware
app.use(express.urlencoded({ extended: true }));

// Adding admin router
app.use(adminRouter);

// Adding shop router
app.use(shopRouter);

// Defining ports
const port = 3000;
const ip = "0.0.0.0";

// Running server
app.listen(port, ip, (err) => {
  console.log("🟢 Server listening in http://localhost:3000");
});
