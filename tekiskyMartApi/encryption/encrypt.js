import bcrypt from "bcrypt"
export let hashPassward=async (passward)=>{
    let hashPass=await bcrypt.hash(passward,10)
    return hashPass
}
export let comparePassward=async(userPass,DbPass)=>{
    try {
        let flag=await bcrypt.compare(userPass,DbPass)  
        return flag;
    } catch (error) {
        console.log(error);
    }
}   