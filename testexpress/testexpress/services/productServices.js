import productModel from "../models/productModel.js"
 export let createProductservices=async(productDetails)=>{
    try{
        let u1=new productModel(productDetails)
        let data=await u1.save()
        console.log(data)
        return "success"
    } catch(error){
        console.log('error while creating user')
        return "error"
    }
}

export let updatedProductservices=async()=>{
    try{
let result= await productModel.updateOne({"productname":"Bluetooth Speaker"},{"company":"ibm"})
console.log(result)
return "success"
}catch(error){
    console.log('error while creating user')
    return "error"
}
} 
export let Deleteservices=async()=>{
    try{
let result= await productModel.deleteMany({"productname":"Wireless Mo"},{"model":"WMX200"})
console.log(result)
return "success"
}catch(error){
    console.log('error while deleting user')
    return "error"
}
}