import userModel from "../models/userModel.js";
 let createUserServices=async ({name,email,passward:hashpassward,mobile})=>{
try{
    let u1=new userModel({name,email,passward:hashpassward,mobile})   
let data=await u1.save()
console.log(data)
return "success"
}catch (error){
    console.log("error occured ")
    return "failure"
}
}
export default createUserServices