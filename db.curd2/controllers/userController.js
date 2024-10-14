import { createUserServices, getUserServices,updateUserServices,deleteUserServices } from "../services/userServices.js";
export let createUser=async (req, res) => {
    let userDetails=req.body
    console.log(userDetails)
    try{
        let stautus=await createUserServices(userDetails)
        if(stautus=='success'){
            res.send('user created succesfully').status(201)
        }else{
            res.send('error  creating user').status(400)

        }}catch(error){
            res.send('error creating user').status(500)
        }

 
}
export let readuser = async (req, res) => {
    try {
        let status = await getUserServices();
        if (status == "success") {
            return res.status(201).send('user read successfully');
        } else {
            return res.status(400).send('error: failed to fetch product');
        }
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};
export let updateuser = async (req, res) => {
    const id =req.params.id
    const user=req.body;
    try {
        let status = await updateUserServices(id,user);
        if (status == "success") {
            return res.status(201).send('user updated successfully');
        } else {
            return res.status(400).send(`${error}`);
        }
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};
export let deleteuser = async (req, res) => {
    try {
        let status = await deleteUserServices();
        if (status == "success") {
            return res.status(201).send('user deleted successfully');
        } else {
            return res.status(400).send('error: failed to delete product');
        }
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};