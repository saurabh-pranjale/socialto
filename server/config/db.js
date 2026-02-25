
import mongoose from "mongoose";



function connectDB(){
    try {
        mongoose.connect(process.env.mongoDBURL)
        
        console.log('db connection successfull')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB