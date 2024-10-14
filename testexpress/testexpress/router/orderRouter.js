import express from "express"
import { createorder, Readorder } from "../controller/orderController.js"
let orderRout=express.Router()
orderRout.post('/createorder',createorder)
orderRout.get('/readorder',Readorder)
export default orderRout