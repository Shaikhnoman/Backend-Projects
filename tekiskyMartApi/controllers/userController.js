import {registerUserSer,getDbPassward,getProfileSer} from "../services/userService.js";
import {hashPassward,comparePassward} from '../encryption/encrypt.js'
import  {generateToken,verifyToken} from '../authorization/jwt.js'



export let registerUser=async (req, res) => {
    let {firstname,sname,address,mobile,email,passward}=req.body
    let hashpass=await hashPassward(passward)
        console.log(hashpass)   
       

    // let userDetails=req.body
    // console.log(userDetails)
    try{
        let stautus=await registerUserSer({firstname,sname,address,mobile,email,passward:hashpass})
        if(stautus=='success'){
            res.json("message:user created succesfully").status(201)
        }else{
            res.json('message:error  creating user').status(401)

        }}catch(error){
            res.json('message:error creating user').status(500)
        }

 
}
export let loginUser=async(req,res)=>{
    try {
        let {email,passward}=req.body
    let dbPass=await getDbPassward(email)
    let status=await comparePassward(passward,dbPass)
    if(status){
        let token=generateToken(email)
        res.json({"mess":"success","token":token}).status(202)
        }else{
            res.json({"mess":"error"}).status(401)
    }} catch (error) {
        console.log(error)
        
    }
}

export const getProfile=async(req,res)=>{
    let {email}=req.body
    let beartoken=req.headers.authorization
    let arrToken=beartoken.split(" ");
    let token=arrToken[1]
    console.log(token);
    let tokenEmail=verifyToken(token)
    console.log(`token email is ${tokenEmail}`);
    if(email==tokenEmail){
     let user =await getProfileSer(email)
     res.json({"user":user})
    }else{
        res.json({"message":"error"})
    }
   
}
