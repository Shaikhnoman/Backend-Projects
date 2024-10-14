import reviewsModel from "../models/reviewsModel.js";
export let createreviewsServices=async (reviews)=>{
try{
    let u1=new reviewsModel(reviews)   
let data=await u1.save()
console.log(data)
return "success"
}catch (error){
    console.log("error occured ")
    return "failure"
}
}
export let getreviewsServices = async () => {
    try {
        let data = await reviewsModel.find();
        console.log(data);
        return "success";
    } catch (error) {
        console.log('Error while retrieving reviews:', error);
        return "error";
    }
};
export let updatereviewsServices = async (id,reviews) => {
    try {
        let data = await reviewsModel.findByIdAndUpdate({_id: id},reviews);
        console.log(data);
        return "success";
    } catch (error) {
        console.log('Error while updating reviews:', error);
        return "error";
    }
};
export let deletereviewsServices = async (id,reviews) => {
    try {
        let data = await reviewsModel.findandel({"reviewsnumber":"p12323"},{"price": 20000});
        console.log(data);
        return "success";
    } catch (error) {
        console.log('Error while updating reviews:', error);
        return "error";
    }
};
