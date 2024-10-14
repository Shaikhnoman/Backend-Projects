import mongoose from "mongoose";
let userSchema=new mongoose.Schema({
    name:{type:String,trim:true},
    email:{type:String,required:true,unique:true},
    passward:{type:String},
    mobile:{type:Number}
})
   
let userModel=mongoose.model('user',userSchema,'user')

export default userModel