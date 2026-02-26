import express from 'express'
import { auth } from '../middlware/auth.js'
import { createPost } from '../controllers/post.js'
import Upload from '../middlware/multer.js'


const router = express.Router()


router.post('/like/:id',()=>{})
router.post('/comment/:id',()=>{})


router.post('/creat-post',auth,Upload.single('photo'),createPost)

router.post('/posts',()=>{})
router.put('/update/:id',()=>{})
router.delete('/delete/:id',()=>{})


export default router