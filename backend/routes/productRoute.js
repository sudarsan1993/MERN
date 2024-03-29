import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../modals/productModel.js";

const router = express.Router();

// @description fetch all products
// @route GET/api/products
// @access public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @description fetch single products
// @route GET/api/products/:id
// @access public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
