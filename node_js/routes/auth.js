import express from "express"

export  const router = express.Router()

router.get('/',(req,res)=>{
const obj = {
    a :"thons",
    age : 42
}
res.json(obj)
})