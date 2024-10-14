import express from 'express'
let productRoutes=express.Router();
import {productController} from  '../controllers/productController.js'
productRoutes.post('/createProduct',productController)
//productRoutes.get('/getProduct/:product_id',getProduct)
//productRoutes.get('/allProduct',allProduct)
export default productRoutes
