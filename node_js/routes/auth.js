import express from "express"
import { userModel } from "../mongoose/model/User.js"
import { body, validationResult } from 'express-validator';



export  const router = express.Router()

//* create a user Using: Post "/api/auth". Doesn't required Auth
router.post('/', [
  //* we can give custam msg
  body('name','Enter a valid name').isLength({min:3}),
  body('email','Enter a valid email').isEmail(),
  body('password','Passwor must be atleat 5 characters').isLength({min:5})
],async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    }
    userModel.create({
      
      name : req.body.name,
      email : req.body.email,
      password: req.body.password

    }).then(user=>res.json(user)).catch(error=>{console.log(error),
      res.json({error:'please enter a unique value for email',message:error.message})
       
    }
  )
  
})