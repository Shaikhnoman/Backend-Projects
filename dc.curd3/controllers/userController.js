import createUserServices from "../services/userServices.js";
import {hashPassward} from "../encrption/encrypt.js"
 let createUser=async (req, res) => {
 let  {name,email,passward,mobile}=req.body
    // let userDetails=req.body
    let hashpassward=await hashPassward(passward)
        console.log(hashpassward)   
    // console.log(userDetails)
    try{
        let status=await createUserServices({name,email,passward:hashpassward,mobile})
        if(status=='success'){
            res.send('user created succesfully').status(201)
        }else{
            res.send('error  creating user').status(400)

        }}catch(error){
            res.send('error creating user').status(500)
        }
    }
export default createUser