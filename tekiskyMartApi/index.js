import express from 'express'
const app=express()
import bodyParser from "body-parser"
import dotenv from 'dotenv'
import userRoutes from './routes/userRoute.js'
import dbConnect from "./db/dbConnect.js"
app.use(express.json())
dotenv.config()
dbConnect(process.env.DBURL,process.env.DBNAME)
app.use(bodyParser.urlencoded({extended:false}))
let PORT=process.env.PORT
app.use("/user", userRoutes)
app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`);
})

