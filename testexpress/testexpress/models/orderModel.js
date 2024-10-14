import mongoose from "mongoose"
let orderSchema = new mongoose.Schema({
    orderNumber: { type: String, trim: true, required: true },
    address: { type: String, trim: true, required: true },
    price: { type: Number, required: true },
    gst: { type: Number, required: true }
});
let orderModel=mongoose.model('order',orderSchema,'orders')
export default orderModel