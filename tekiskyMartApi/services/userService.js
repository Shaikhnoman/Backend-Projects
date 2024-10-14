import userModel from "../model/userModel.js";
export let registerUserSer=async({firstname,sname,address,mobile,email,passward:hashpass})=>{
    try {
        let u1=new userModel({firstname,sname,address,mobile,email,passward:hashpass})
        let user1=await u1.save()
        console.log(user1)
        return 'success'
}catch(error){
    console.log(error)
}
}
export let getDbPassward=async(email)=>{
    try {
        let user=await  userModel.findOne({email})
        return  user.passward

    } catch (error) {
        console.log(error)
        
    }
}
export let getProfileSer=async(email)=>{
    try {
        let user=await userModel.findOne({email});
        return user;
    } catch (error) {
        console.log(error);
    }
    }