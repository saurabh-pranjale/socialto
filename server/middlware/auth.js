import jwt from 'jsonwebtoken'


export const auth = (req, res, next) => {
    try {

        const token = req.headers.token.split(" ")[1]

        console.log(token,"!@!")

         if(!token) return res.status(400).json({message:"token is missing"})

        const decode = jwt.decode(token,"hellobrother")
           
        req.user = decode

        next()
            
    } catch (error) {
        res.status(500).json({ message: error })
    }
}