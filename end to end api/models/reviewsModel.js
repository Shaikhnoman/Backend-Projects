import mongoose from "mongoose";
let reviewsSchema=new mongoose.Schema({
    reviewsnumber:{type:String,trim:true},
    reviewscomments:{type:String,required:true},
    star:{type:Number},
   
  
})
   
let reviewsModel=mongoose.model('reviews',reviewsSchema,'reviews')

export default reviewsModel