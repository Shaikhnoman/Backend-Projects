import express from "express" 
const app=express()
import dotenv from "dotenv"
import productRoutes from "./routes/productRoute.js"
import bodyParser from "body-parser"
import dbconnect from './db/connection.js'
dotenv.config()
let port=process.env.PORT
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
dbconnect(process.env.DBURL,process.env.DBNAME)
app.use('/product',productRoutes)
app.listen(port,()=>{
    console.log(`server sterted at ${port}`);
})