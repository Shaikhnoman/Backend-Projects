import { createorderServices, getorderServices,updateorderServices,deleteorderServices } from "../services/orderServices.js";
export let createorder=async (req, res) => {
    let orderDetails=req.body
    console.log(orderDetails)
    try{
        let stautus=await createorderServices(orderDetails)
        if(stautus=='success'){
            res.send('order created succesfully').status(201)
        }else{
            res.send('error  creating order').status(400)

        }}catch(error){
            res.send('error creating order').status(500)
        }

 
}
export let readorder = async (req, res) => {
    try {
        let status = await getorderServices();
        if (status == "success") {
            return res.status(201).send('order read successfully');
        } else {
            return res.status(400).send('error: failed to fetch order');
        }
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};
export let updateorder = async (req, res) => {
    try {
        let status = await updateorderServices();
        if (status == "success") {
            return res.status(201).send('order updated successfully');
        } else {
            return res.status(400).send('error: failed to fetch order');
        }
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};
export let deleteorder = async (req, res) => {
    try {
        let status = await deleteorderServices();
        if (status == "success") {
            return res.status(201).send('order deleted successfully');
        } else {
            return res.status(400).send('error: failed to delete order');
        }
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};