import mongoose from "mongoose";
let productSchema=new mongoose.Schema({
    productname:{type:String,trim:true},
    model:{type:String,required:true},
    company:{type:String},
    price:{type:Number,required:true},
    tax:String,
    expiry:String
})
let productModel=mongoose.model('product',productSchema,'product')

export default productModel