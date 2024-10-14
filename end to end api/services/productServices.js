import productModel from "../models/productModel.js";
export let createproductServices = async (product) => {
  try {
    let u1 = new productModel(product);
    let data = await u1.save();
    console.log(data);
    return "success";
  } catch (error) {
    console.log("error occured ");
    return "failure";
  }
};
export let getproductServices = async () => {
  try {
    let data = await productModel.find();
    console.log(data);
    return "success";
  } catch (error) {
    console.log("Error while retrieving users:", error);
    return "error";
  }
};
export let updateproductServices = async (id, product) => {
  
  try {
    let data = await productModel.findByIdAndUpdate({ _id: id }, product);
    console.log(data);
    return "success";
  } catch (error) {
    console.log("Error while updating product:", error);
    return "error";
  }
};
export let deleteproductServices = async (id,product) => {
  try {
    let data = await productModel.findByIdAndDelete({_id:id},product);
    console.log(data);
    return "success";
  } catch (error) {
    console.log("Error while updating product:", error);
    return "error";
  }
};
