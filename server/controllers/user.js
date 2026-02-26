import mongoose from 'mongoose'
import {User} from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const register = async (req, res) => {


    const { name, email, username, password } = req.body

    try {

        if (!name || !email || !username || !password) {
           return res.status(400).json({ messasge: "please fill all the blanks" })
        }

        const existUser = await User.findOne({ email })

        if (existUser) return res.status(200).json({ message: "Email is already registered" })

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({ name, email, username, password: hashPassword })

        res.status(201).json({ message: "Registration Successfull" })

    } catch (error) {
        res.status(500).json({ message: error })
    }
}




export const login = async (req, res) => {

    const { username, password } = req.body


    if (!username || !password) {
        res.status(400).json({ messasge: "please fill all the blanks" })
    }

    try {

        const existingUser = await User.findOne({ username })

        if (!existingUser) {
            res.status(400).json({ message: "user not exists" })
        }

        const compare = await bcrypt.compare(password,existingUser.password)

        if (!compare) {
            res.status(400).json({ message: "Invalid Password" })
        }

        const token = jwt.sign({ id: existingUser._id, name: existingUser.username, }, "Hellobrother")


        res.status(200).json({ message: "Login Successfull", token: token })

    } catch (error) {
        res.status(500).json({ message: error })
    }
}