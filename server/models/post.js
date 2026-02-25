import mongoose from "mongoose";


const postSchema = mongoose.Schema({
   image:{type:String,required:true},
   caption:{type:String,required:true},
   author:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
   likes : [{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}]
}, {timestamps:true})


export const Post = mongoose.model("Post",postSchema)