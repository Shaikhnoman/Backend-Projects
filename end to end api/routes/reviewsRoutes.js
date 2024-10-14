import express from 'express'
let reviewsRoutes=express.Router();
import {createreviews, readreviews,updatereviews,deletereviews} from  '../controllers/reviewsController.js'
reviewsRoutes.post('/createreviews',createreviews)
reviewsRoutes.get('/getreviews/:reviews_id',readreviews)
reviewsRoutes.put('/updatereviews/:id',updatereviews)
reviewsRoutes.delete('/deletereviews',deletereviews)
export default reviewsRoutes 
