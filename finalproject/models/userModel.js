import mongoose from "mongoose";
let userSchema=new mongoose.Schema({
    email:{type:String,trim:true},
    name:{type:String,required:true},
    mobile:{type:Number},
    password:{type:String,required:true},
    address:String
})
let userModel=mongoose.model('user',userSchema,'user')

export default userModel