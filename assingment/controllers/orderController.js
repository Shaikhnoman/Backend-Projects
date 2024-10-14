import { createproduct } from "../services/productServices.js";

export let getProduct = async (req, res) => {
    let productDetails = req.body;
    console.log(productDetails);

    try {
        let status = await createproduct(productDetails);
        if (status == "success") {
            return res.status(201).send("product created succefully"); 
        } else {
            return res.status(400).send('error: product creation failed');
        }
    } catch (error) {
        return res.status(500).send("error occurred"); 
    }
};