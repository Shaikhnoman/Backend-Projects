import express from 'express'
let userRoutes=express.Router();
import createUser from  '../controllers/userController.js'
userRoutes.post('/createUser',createUser)
export default userRoutes 