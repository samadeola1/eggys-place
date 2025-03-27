import express from "express";
import { allproducts, createProduct,product,products, searchproduct} from "../controllers/productController.js";
const router = express.Router();

// post request
router.post("/create",createProduct);

// insert many
router.post ("/products",products)

// get all products
router.get("/all-products",allproducts)

// get single product
router.get("/:productId",product);

// search
router.get("/products/search",searchproduct)

export default router;
