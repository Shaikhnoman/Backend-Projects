import express from "express"
import { deleteProduct, getProduct, updateProduct } from "../controller/productController.js"
let productd=express.Router()
productd.get('/getproductDetail/:product_id',getProduct)
export default productd
productd.put('/updateProduct',updateProduct)
productd.delete('/deleteproduct',deleteProduct)