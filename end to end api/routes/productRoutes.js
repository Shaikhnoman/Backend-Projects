import express from 'express'
let productRoutes=express.Router();
import {createproduct, readproduct,updateproduct,deleteproduct} from  '../controllers/productController.js'
productRoutes.post('/createproduct',createproduct)
productRoutes.get('/getproduct/:product_id',readproduct)
productRoutes.put('/updateproduct/:id',updateproduct)
productRoutes.delete('/deleteproduct/:id',deleteproduct)
export default productRoutes 