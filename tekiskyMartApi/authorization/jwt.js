import jwt from "jsonwebtoken"
export let generateToken=(email)=>{
    let token=jwt.sign({email},process.env.SECRETKEY)
    return token
}

export let verifyToken=(token)=>{
    let payload=jwt.verify(token,process.env.SECRETKEY)
    return payload.email;
    }