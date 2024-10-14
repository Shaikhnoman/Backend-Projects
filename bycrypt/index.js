import bcrypt from "bcrypt"
let originalpassaward="Noman123"
let hashpassaward= async(originalpassaward)=>{
    let encyrptPass=await bcrypt.hash(originalpassaward,10)
    console.log(encyrptPass);
}
// hashpassaward(originalpassaward)
let hashpas="$2b$10$VCxQMS4a/X4grWrX1o9uv.YC7fIa13UoZ.oAIZANXV8ZS9lZlDqaO"
let comPass=async(originalpassaward,hashpas)=>{
    let output=await bcrypt.compare(originalpassaward,hashpas)
    console.log(output);
}
comPass(originalpassaward,hashpas)