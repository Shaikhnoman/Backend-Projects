import express from 'express'
let orderRoutes=express.Router();
import {createorder, readorder,updateorder,deleteorder} from  '../controllers/orderController.js'
orderRoutes.post('/createorder',createorder)
orderRoutes.get('/getorder/:order_id',readorder)
orderRoutes.put('/updateorder',updateorder)
orderRoutes.delete('/deleteorder',deleteorder)
export default orderRoutes 
