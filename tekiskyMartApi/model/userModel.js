import mongoose from "mongoose"
let userSchema=new  mongoose.Schema({
fisrtname:{type:String},
sname:{type:String,required:true},
address:{type:String},
email:{type:String,required:true,unique:true},
mobile:{type:String},
passward:{type:String,required:true}
})
let userModel=mongoose.model('user',userSchema,'user')

export default userModel