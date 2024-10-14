import { createUserServices } from "../services/userServices.js";
export let createUser=async (req, res) => {
    let userDetails=req.body
    console.log(userDetails)
    try{
        let stautus=await createUserServices(userDetails)
        if(stautus=='succes'){
            res.send('user created succesfully').status(201)
        }else{
            res.send('error  creating user').status(400)

        }}catch(error){
            res.send('error creating user').status(500)
        }

 
}
export  let getProfile  =  (req, res) => {
    let email=req.params.email
    console.log(email);
console.log('user retrieved');
res.send('user retrieved')
}
export let  allUser  =  (req, res) => {
console.log('all user ');
res.send('all user ')
}