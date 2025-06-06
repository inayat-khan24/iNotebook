import express from "express"
import connectToMongo from "./mongoose/connection/connection.js"

connectToMongo()
const app = express()

const PORT = 3000

app.use(express.json())
// http://localhost:3000/
app.get("/",(req,res)=>{
    res.send("hello")
    console.log("hello")
})

app.listen(PORT,()=>{
    console.log(`running server http://localhost:${PORT}`)
})