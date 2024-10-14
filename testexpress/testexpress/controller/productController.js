import { createProductservices, Deleteservices, updatedProductservices } from "../services/productServices.js";

export let getProduct = async (req, res) => {
    let productDetails = req.body;
    console.log(productDetails);

    try {
        let status = await createProductservices(productDetails);
        if (status == "success") {
            return res.status(201).send(`product created successfully with productid ${productDetails}`); 
        } else {
            return res.status(400).send('error: product creation failed');
        }
    } catch (error) {
        return res.status(500).send("error occurred"); 
    }
};
 export let updateProduct=async(req,res)=>{
  try {
    let status = await updatedProductservices();
    if (status == "success") {
        return res.status(201).send(`product updated successfully`); 
    } else {
        return res.status(400).send('error: product update failed');
    }
} catch (error) {
    return res.status(500).send(`error occurred${error}`); 
}
} 
export let deleteProduct=async(req,res)=>{
  try {
    let status = await Deleteservices();
    if (status == "success") {
        return res.status(201).send(`product delted successfully`); 
    } else {
        return res.status(400).send('error: product deleted failed');
    }
} catch (error) {
    return res.status(500).send(`error occurred${error}`); 
}
}

