// Saving data in RAM
export const products = [];

// GET /admin/add-product
export const getAddProduct = (req, res, next) => {
  console.log("✔ Serving form...");
  return res.render("add-product", {
    addProduct: `active`,
    viewStyle: "/css/add-product.css",
    docTitle: "Add Product",
  });
};

// POST /admin/add-product
export const postAddProduct = (req, res) => {
  const { title } = req.body;
  products.push(title);
  return res.redirect("/");
};

// GET /
export const getProducts = (req, res) => {
  console.log("✔ Serving '/' route");
  res.render("shop", {
    shop: "active",
    docTitle: "Shop",
    viewStyle: "/css/product.css",
    isProductsListEmpty: products.length === 0,
    products,
  });
};
