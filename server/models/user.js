import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    user:{type:String,required:true,unique:true},
    passowrd:{type:String,required:true,}
})

export const User = mongoose.model('User',userSchema)

