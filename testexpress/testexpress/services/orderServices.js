import orderModel from "../models/orderModel.js"

export let createOrderservices=async(orderDetails)=>{
    try{
        let u1=new orderModel(orderDetails)
        let data=await u1.save()
        console.log(data)
        return "success"
    } catch(error){
        console.log('error while creating user')
        return "error"
    }
}

export let getOrderservices=async(orderDetails)=>{
    try{
        let u1=new orderModel.find()
        let data=await u1.save()
        console.log(data)
        return "success"
    } catch(error){
        console.log(`${error}`)
        return "error"
    }
}