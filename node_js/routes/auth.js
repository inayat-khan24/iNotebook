import express from "express"
import { userModel } from "../mongoose/model/User.js"


export  const router = express.Router()

//* create a user Using: Post "/api/auth". Doesn't required Auth
router.post('/', async(req,res)=>{
    console.log(req.body)
 const user  = await userModel(req.body)
 user.save()
  res.status(201).json({success:true,user})
})