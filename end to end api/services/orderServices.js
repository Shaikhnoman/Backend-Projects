import orderModel from "../models/orderModel.js";
export let createorderServices=async (order)=>{
try{
    let u1=new orderModel(order)   
let data=await u1.save()
console.log(data)
return "success"
}catch (error){
    console.log("error occured ")
    return "failure"
}
}
export let getorderServices = async () => {
    try {
        let data = await orderModel.find();
        console.log(data);
        return "success";
    } catch (error) {
        console.log('Error while retrieving order:', error);
        return "error";
    }
};
export let updateorderServices = async () => {
    try {
        let data = await orderModel.updateOne({"ordernumber":"p12323"},{"ordernumber":"p22323"});
        console.log(data);
        return "success";
    } catch (error) {
        console.log('Error while updating order:', error);
        return "error";
    }
};
export let deleteorderServices = async () => {
    try {
        let data = await orderModel.deleteOne({"ordernumber":"p12323"},{"price": 20000});
        console.log(data);
        return "success";
    } catch (error) {
        console.log('Error while updating order:', error);
        return "error";
    }
};
