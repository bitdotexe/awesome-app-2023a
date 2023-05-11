// Importing HTTP module
import http from "http";

// Importing ExpressJS
import express from "express";

// Creating an Express instance
const app = express(); // (req, res) => { BUNCH OF CODE }

// Creating server
const server = http.createServer(app);

// Defining ports
const port = 3000;
const ip = "0.0.0.0";

// Running server
server.listen(port, ip, (err) => {
  console.log("🟢 Server listening in http://localhost:3000");
});
