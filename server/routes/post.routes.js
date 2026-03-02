import express from 'express'
import { auth } from '../middlware/auth.js'
import { createComment, createPost, deletePost, getAllPosts, getOnePost, likes } from '../controllers/post.js'
import Upload from '../middlware/multer.js'


const router = express.Router()


router.post('/:postId/like',auth,likes)


router.post('/:postId/comment/',auth,createComment)





router.post('/creat-post',auth,Upload.single('photo'),createPost)

router.get('/posts',auth,getAllPosts)

router.get('/posts/:id',auth,getOnePost)


router.put('/update/:id',()=>{})

router.delete('/delete/:postId',auth,deletePost)


export default router