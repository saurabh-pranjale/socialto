import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/user.routes.js'
import postRoutes from './routes/post.routes.js'
import path from 'path'
import cors from 'cors'
const app = express()

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const uploadPath = path.join(__dirname, 'uploads')

dotenv.config()

const port = process.env.port || 5000
connectDB()

app.use(cors())
app.use(express.json())

app.use('/uploads',express.static(uploadPath))

app.use('/api/v1/auth',userRoutes)
app.use('/api/v1/post',postRoutes)





app.listen(port,()=>{
    console.log(`we are listening at ${port}`)
})