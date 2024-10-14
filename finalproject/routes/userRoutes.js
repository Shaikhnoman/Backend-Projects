import express from 'express'
let userRoutes=express.Router();
import {createUser,getProfile,allUser} from  '../controllers/userController.js'
userRoutes.post('/createUser',createUser)
userRoutes.get('/getProfile/:email',getProfile)
userRoutes.get('/allUser',allUser)
export default userRoutes