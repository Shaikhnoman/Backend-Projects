import mongoose from "mongoose";
let dbconnect =async(dburl,dbName)=>{
try{
    await mongoose.connect(dburl+dbName)
    console.log(`conneted to database succesfullly`);
}catch(error){
    console.log(`erro while connecting to database ${error}`)
}
}
export default dbconnect