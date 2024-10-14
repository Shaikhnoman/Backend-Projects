import productModel from "../models/productModel.js"

export let createproduct=async()=>{
    let productDetails=req.body
    try{
        let u1=new productModel(productDetails)
        let data=await u1.save()
        console.log(data)
        return "sucess"
    } catch(error){
        console.log("error")
        return "error"
    }
    }