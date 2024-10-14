import { createreviewsServices, getreviewsServices,updatereviewsServices,deletereviewsServices } from "../services/reviewsServices.js";
export let createreviews=async (req, res) => {
    let reviewsDetails=req.body
    console.log(reviewsDetails)
    try{
        let stautus=await createreviewsServices(reviewsDetails)
        if(stautus=='success'){
            res.send('reviews created succesfully').status(201)
        }else{
            res.send('error  creating reviews').status(400)

        }}catch(error){
            res.send('error creating reviews').status(500)
        }

 
}
export let readreviews = async (req, res) => {
    try {
        let status = await getreviewsServices();
        if (status == "success") {
            return res.status(201).send('reviews read successfully');
        } else {
            return res.status(400).send('error: failed to fetch reviews');
        }
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};
export let updatereviews = async (req, res) => {
    const id = req.params.id;
    const reviews = req.body;
    try {
        let status = await updatereviewsServices(id,reviews);
        if (status == "success") {
            return res.status(201).send('reviews updated successfully');
        } else {
            return res.status(400).send('error: failed to fetch reviews');
        }
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};
export let deletereviews = async (req, res) => {
    try {
        let status = await deletereviewsServices();
        if (status == "success") {
            return res.status(201).send('reviews deleted successfully');
        } else {
            return res.status(400).send('error: failed to delete reviews');
        }
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};