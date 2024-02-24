const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//router for all products
router.get("/", getProducts);

//router for speciid id
router.get("/:id", getProduct);

// router for CREATE
router.post("/", createProduct);
// router for UPDATE
router.put("/:id", updateProduct);
//router for DELETE
router.delete("/:id", deleteProduct);

module.exports = router;
