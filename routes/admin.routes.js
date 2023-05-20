/* This line of code is importing the `Router` class from the `express` module in JavaScript. The
`Router` class is used to create modular, mountable route handlers for web applications. */
import { Router } from "express";

/* `const router = Router();` is creating a new instance of the `Router` class and assigning it to the
constant variable `router`. This instance can be used to define routes and handlers for a specific
endpoint in a web application. */
const router = Router();

/* `export default router;` is exporting the `router` instance as the default export of the module.
This allows other modules to import and use the `router` instance in their own code. When another
module imports this module, they can access the `router` instance by using `import router from
'./router'`. */
export default router;

/* This code block is defining a route handler for the `/add-product` endpoint using the `router.get()`
method. When a GET request is made to this endpoint, the code block checks if the request method is
`POST`. If it is not a `POST` request, it logs a message to the console indicating that it is
serving a form and sends an HTML form as a response to the client. The form has an input field for
the product title and a submit button. If the request method is `POST`, the code block will call the
`next()` function to pass control to the next middleware function in the stack. */
router.get("/add-product", (req, res, next) => {
  /* `if (req.method === "POST") return next();` is checking if the request method is `POST`. If it is
  a `POST` request, it will call the `next()` function to pass control to the next middleware
  function in the stack. This is used to handle the form submission and add the product to the
  database. */
  if (req.method === "POST") return next();

  /* This code block is defining a route handler for the `/add-product` endpoint using the
  `router.get()` method. When a GET request is made to this endpoint, the code block checks if the
  request method is `POST`. If it is not a `POST` request, it logs a message to the console
  indicating that it is serving a form and sends an HTML form as a response to the client. The form
  has an input field for the product title and a submit button. If the request method is `POST`, the
  code block will call the `next()` function to pass control to the next middleware function in the
  stack. */
  console.log("✔ Serving form...");
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
        }

        h1,
        p,
        label {
          color: #ffff;
          font-size: 20px;
        }

        input {
          font-weight: bolder;
          font-size: 20px;
          border-radius: 6px;
        }

        button {
          border-radius: 6px;
          font-size: 20px;
        }

        form {
          margin-top: 200px;
        }

        h1 {
          margin-top: 30px;
          font-size: 60px;
        }
      </style>
      <title>Adding form</title>
    </head>
    <body>
      <h1>Add products now</h1>
      <form action="/add-product" method="POST">
        <label for="title"><b>Title</b></label>
        <input type="text" name="title" style="border-radius: 5px" />
        <label for="title"><b>Description</b></label>
        <input type="text" name="description" style="border-radius: 5px" />
        <button type="submit"><b>Add product</b></button>
      </form>
    </body>
  </html>
  `);
});

/* This code block is defining a route handler for the `/add-product` endpoint using the
`router.post()` method. When a POST request is made to this endpoint, the code block logs the
request body to the console and redirects the client to the root endpoint `/`. This code block is
used to handle the form submission and add the product to the database. The `req.body` object
contains the data submitted in the form, which in this case is the product title. */
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
