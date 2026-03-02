import { resourceLimits } from 'worker_threads'
import { Post } from '../models/post.js'
import { User } from '../models/user.js'
import { Comment } from '../models/comments.js'

export const createPost = async (req, res) => {

  const { caption } = req.body
  try {

    const image = `http://localhost:8000/uploads/${req.file.filename}`


    await Post.create({ image, caption, author: req.user.id })

    res.status(201).json({ message: 'post created successfull' })

  } catch (error) {
    res.status(500).json({ message: error })
  }
}


export const getAllPosts = async (req, res) => {
  try {
    const result = await Post.find().populate('author', 'username -_id')
      .populate('likes', 'username -_id')

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}








export const getOnePost = async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findById(id).populate('author', ' -_id username')
      .populate('likes', 'username -_id')


    const comment = await Comment.find({ post: id })



    res.status(200).json({ post: post, comment: comment })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}


export const likes = async (req, res) => {

  try {

    const result = await Post.findById(req.params.postId)



    if (result.likes.includes(req.user.id)) {
      result.likes.pull(req.user.id)
    } else {
      result.likes.push(req.user.id)
    }

    await result.save()

    res.status(200).json({ message: "liked", result })

  } catch (error) {
    res.status(500).json({ message: error })
  }
}


export const createComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { postId } = req.params;
    const userId = req.user.id; // assuming auth middleware sets req.user




    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Comment text is required",
      });
    }

    // Check if post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }



    const comment = await Comment.create({
      text,
      post: postId,
      user: userId,
    });

    res.status(201).json({
      success: true,
      message: "Comment created successfully",
      comment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};


export const deletePost = async(req, res) => {

  const {postId} = req.params

  try {
   

    const comment = await Comment.find({post:postId})

   console.log(comment[0]._id)

       await Comment.findByIdAndDelete(comment[0]._id)


     await Post.findByIdAndDelete(postId)   

     res.status(200).json({message:"Deleted Successfully"})

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
}




