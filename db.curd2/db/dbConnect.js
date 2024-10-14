import mongoose from "mongoose";

const dbConnect=async(dburl,dbname)=>{
    try {
        await mongoose.connect(dburl+dbname)
        console.log("database connected succcesfully");
    } catch (error) {
       console.log(`error occured ${error}`); 
    }

}
export default dbConnect