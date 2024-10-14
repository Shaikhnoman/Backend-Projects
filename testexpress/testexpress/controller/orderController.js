import { createOrderservices, getOrderservices } from "../services/orderServices.js";

 export let createorder=async(req,res)=>{
    let orderDetails=req.body
    console.log(orderDetails)
    try {
        let status = await createOrderservices(orderDetails);
        if (status == "success") {
            return res.status(201).send(`order created successfully`); 
        } else {
            return res.status(400).send('error: order creation failed');
        }
    } catch (error) {
        return res.status(500).send(`error occurred${error}`); 
    }
};
export let Readorder=async(req,res)=>{
    let orderDetails=req.body
    console.log(orderDetails)
    try {
        let status = await getOrderservices(orderDetails);
        if (status == "success") {
            return res.status(201).send(`order read successfully`); 
        } else {
            return res.status(400).send('error: order read failed');
        }
    } catch (error) {
        return res.status(500).send(`error occurred${error}`); 
    }
};
