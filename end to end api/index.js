import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import dbConnect from "./db/dbConnect.js"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import reviewsRoutes from "./routes/reviewsRoutes.js"
const app=express()
dotenv.config()
dbConnect(process.env.DBURL,process.env.DBNAME)
let port=process.env.PORT
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/user',userRoutes)
app.use('/product',productRoutes)
app.use('/order',orderRoutes)
app.use('/reviews',reviewsRoutes)
app.listen(port,()=>{
    console.log(`server started at ${port}`);
})