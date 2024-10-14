import { createproduct } from "../services/productServices.js"

export let productController=async (req, res) => {
    let productDetails=req.body
    console.log(productDetails)
    try{
        let stautus=await createproduct(productDetails)
        if(stautus=='success'){
            res.send('product created succesfully').status(201)
        }else{
            res.send('error  creating product').status(400)

        }}catch(error){
            res.send('error creating product').status(500)
        }

 
}
export  let getProduct  =  (req, res) => {
    let product_id =req.params.product_id
    console.log(product_id);
    res.send(`product created and pruduct id${product_id}`)
}
export let  allProduct =  (req, res) => {
res.send('all product ')
}