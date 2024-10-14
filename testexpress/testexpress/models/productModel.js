import mongoose from "mongoose";
let productSchema = new mongoose.Schema({
    productname: { type: String, trim: true, required: true },
    model: { type: String, trim: true, required: true },
    company: { type: String, trim: true, required: true },
    price: { type: Number, required: true },
    tax: { type: Number, required: true },
    expiry: { type: Date }
});

let productModel=mongoose.model('product',productSchema,'products')
export default productModel