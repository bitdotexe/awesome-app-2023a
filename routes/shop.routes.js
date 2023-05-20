// Importando el enrutador de express
import { Router } from "express";

// Creando una instancia del enrutador de express
const router = Router();

export default router;

router.get("/", (req, res) => {
  console.log("✔  Serbing the route '/'");
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          font-family: "Josefin Sans", sans-serif;
        }

        body {
          background-color: #333;
          text-align: center;
          font-size: 60px;
        }

        h1,
        p {
          color: #ffff;
        }

        footer {
          font-size: 20px;
          margin-top: 200px;
        }
      </style>
      <title>ExpressJS app</title>
    </head>
    <body>
      <h1><b>Welcome to ExpressJS</b></h1>
      <p>This is my awesome app</p>
      <footer>
        <p>by: Bit.exe</p>
      </footer>
    </body>
  </html>
  `);
});

router.get("/about", (req, res) => {
  console.log("✔   Serving the route '/about'");
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          font-family: "Josefin Sans", sans-serif;
        }

        body {
          background-color: #333;
          font-size: 30px;
          text-align: center;
        }

        h1,
        p {
          color: #ffff;
        }
      </style>
      <title>About</title>
    </head>
    <body>
      <h1>This proyect was coded by: Bit.exe</h1>
      <p>This is a page created to learn Fullstack web development with JS</p>
      <p>Uriel Abisai Torres García | 191130325</p>
    </body>
  </html>
  `);
});
