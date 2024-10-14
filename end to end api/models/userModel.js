import mongoose from "mongoose";
let userSchema=new mongoose.Schema({
    name:{type:String,trim:true},
    email:{type:String,required:true},
    passward:{type:String},
    number:{type:Number}
})
   
let userModel=mongoose.model('user',userSchema,'user')

export default userModel