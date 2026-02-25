import mongoose from "mongoose";


const commentSchema = mongoose.Schema({
    text:{type:String,required:true},
    post:{type:mongoose.Schema.Types.ObjectId,ref:"Post",required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}
},
{timestaps:true}
)

export const Comment = mongoose.model("Comment",commentSchema)