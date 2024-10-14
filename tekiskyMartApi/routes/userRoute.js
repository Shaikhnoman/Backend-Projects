import express from 'express'
let userRoutes=express.Router()
import  {registerUser,loginUser,getProfile} from '../controllers/userController.js'
userRoutes.post('/register',registerUser)
userRoutes.post('/login',loginUser)
userRoutes.post('/profile',getProfile)



export default userRoutes;
