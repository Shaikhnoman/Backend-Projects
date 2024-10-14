import mongoose from "mongoose";
let orderSchema=new mongoose.Schema({
    ordernumber:{type:String,trim:true},
    address:{type:String,required:true},
    price:{type:Number},
    gst:{type:String},
  
})
   
let orderModel=mongoose.model('order',orderSchema,'order')

export default orderModel