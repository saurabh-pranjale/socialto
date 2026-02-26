import { Post } from '../models/post.js'
import { User } from '../models/user.js'


export const createPost = async(req, res) => {
   
    const {caption} = req.body
    try {
      
        const image = `http://localhost:8000/uploads/${req.file.filename}`


        await Post.create({image,caption,author:req.user.id})
   
        res.status(201).json({message:'post created successfull'})
  
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


export const getAllPosts = async(req,res) =>{
    try {
        const result = await Post.find().populate('author', 'username -_id')

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error})
    }
}




export const getOnePost = async(req,res) =>{
    const {id} = req.params
    try {
        const result = await Post.findById(id)

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error})
    }
}



