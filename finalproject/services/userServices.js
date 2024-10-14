import userModel from "../models/userModel.js";
export let createUserServices=async (user)=>{
try{
    let u1=new userModel(user)   
let data=await u1.save()
res.send(data)
return "success"
}catch (error){
    console.log("error occured ")
    return "failure"
}
}
// export let  