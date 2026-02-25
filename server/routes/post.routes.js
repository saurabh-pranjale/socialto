import express from 'express'


const router = express.Router()


router.post('/like/:id',()=>{})
router.post('/comment/:id',()=>{})


router.post('/creat-post',()=>{})
router.post('/posts',()=>{})
router.put('/update/:id',()=>{})
router.delete('/delete/:id',()=>{})


export default router