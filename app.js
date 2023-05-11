// Importing HTTP module
import http from "http";

// Importing ExpressJS
import express from "express";

// Creating an Express instance
const app = express(); // (req, res) => { CODE }

// Registering our first middleware
app.use((req, res, next) => {
  console.log("⚙️  Executing Middleware #1");
  // Ivoking the next middleware
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
});

app.use((req, res) => {
  console.log("🔊 Answering to the client");
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ExpressJS app</title>
    </head>
    <body>
      <h1>Welcome to ExpressJS</h1>
      <p>This is my awesome app</p>
    </body>
  </html>
  `);
});

// Creating server
const server = http.createServer(app);

// Defining ports
const port = 3000;
const ip = "0.0.0.0";

// Running server
server.listen(port, ip, (err) => {
  console.log("🟢 Server listening in http://localhost:3000");
});
