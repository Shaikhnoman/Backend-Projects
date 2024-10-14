import express from "express"
import bodyParser from "body-parser"
import { getProduct } from "./controller/productController.js"
import  dbConnect from  "./db/connection.js"
const app=express()
import dotenv from 'dotenv'
import productd from "./router/productRouter.js"
import orderRout from "./router/orderRouter.js"
dotenv.config()
let port=process.env.PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use('/products',productd)
app.use('/orders',orderRout)
dbConnect(process.env.DBURL, process.env.DBNAME);
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})