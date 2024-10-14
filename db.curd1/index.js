import mongoose from "mongoose";
mongoose.connect('mongodb://0.0.0.0:27017/dbcurd')
const db=mongoose.connection
db.on('open',()=>{
    console.log('Coneccted to data base succesfully');
})

let mobileschema=new mongoose.Schema({
    "company":String,
    "model":String,
    "price":Number,
    "des":String
})
let mobileModel=mongoose.model('mobile',mobileschema)

let m1=new mobileModel({
    "company":"Vivo",
    "model":"v40",
    "price":35000,
    "des":"Best camara phone"
})
m1.save()
let m2=new mobileModel({
    "company":"Samsung",
    "model":"s23",
    "price":55000,
    "des":"Best compact phone"
})
m2.save()

let readData=async()=>{
    let data=await mobileModel.find()
    console.log(data)
}
readData()
let updateprice=async()=>{
    let result=await mobileModel.updateOne({"model":"s23"},{"price":45000})
    console.log(result)
}
updateprice()
let deletemobile=async()=>{
    let result=await mobileModel.deleteOne({"mobile":"vivo"})

}
deletemobile()