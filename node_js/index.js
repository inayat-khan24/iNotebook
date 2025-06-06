import express from "express"
import connectToMongo from "./mongoose/connection/connection.js"
import { router } from "./routes/auth.js"
import { routes } from "./routes/notes.js"

connectToMongo()
const app = express()

const PORT = 3000

app.use(express.json())

app.use('/api/auth',router)
app.use('/api/notes',routes)

app.listen(PORT,()=>{
    console.log(`running server http://localhost:${PORT}`)
})