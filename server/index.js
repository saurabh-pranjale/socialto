import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/user.routes.js'
import postRoutes from './routes/post.routes.js'
import cors from 'cors'
const app = express()

dotenv.config()

const port = process.env.port || 5000
connectDB()

app.use(cors())
app.use('/api/v1',userRoutes)
app.use('/api/v1',postRoutes)


app.listen(port,()=>{
    console.log(`we are listening at ${port}`)
})