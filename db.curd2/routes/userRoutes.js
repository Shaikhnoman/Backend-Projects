import express from 'express'
let userRoutes=express.Router();
import {createUser, readuser,updateuser,deleteuser} from  '../controllers/userController.js'
userRoutes.post('/createUser',createUser)
userRoutes.get('/getuser/:users_id',readuser)
userRoutes.put('/updateuser/:id',updateuser)
userRoutes.delete('/deleteuser',deleteuser)
export default userRoutes 