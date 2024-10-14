import userModel from "../models/userModel.js";
export let createUserServices=async (user)=>{
try{
    let u1=new userModel(user)   
let data=await u1.save()
console.log(data)
return "success"
}catch (error){
    console.log("error occured ")
    return "failure"
}
}
export let getUserServices = async () => {
    try {
        let data = await userModel.find();
        console.log(data);
        return "success";
    } catch (error) {
        console.log('Error while retrieving users:', error);
        return "error";
    }
};
export let updateUserServices = async (id,user) => {
    try {
        let data = await userModel.findByIdAndUpdate({_id: id},user);
        console.log(data);
        return "success";
    } catch (error) {
        console.log('Error while updating users:', error);
        return "error";
    }
};
export let deleteUserServices = async () => {
    try {
        let data = await userModel.deleteOne({"name":"Noman"},{"email":"sk123@gmail.com"});
        console.log(data);
        return "success";
    } catch (error) {
        console.log('Error while updating users:', error);
        return "error";
    }
};
