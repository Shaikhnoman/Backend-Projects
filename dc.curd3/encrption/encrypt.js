import bcrypt from "bcrypt"
export let hashPassward=async (passward)=>{
    let hashPassward=await bcrypt.hash(passward,10)
    return hashPassward
}