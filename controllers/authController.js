import User from '../models/userModel.js'
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async (req, res) =>{
    try {
        const {userName, password} = req.body
        const user = await User.findOne({userName})
        
        if(!user) {
            res.status(404).json({success:false, error: "user not found"})
        }

        const isMatch = await bycrypt.compare(password, user.password)
        if(!isMatch) {
            res.status(404).json({success:false, error: "user not found"})
        }

        const token = jwt.sign({
            _id: user._id,
            role: user.role
        }, process.env.JWT_KEY, {expiresIn: "120m"})

        res.status(200).json({
            success: true, token,
            user: {
                _id: user._id, 
                userName: user.userName,
                role: user.role
            }})
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
}

const verify = (req, res) =>{
    return  res.status(200).json({success: true, user: req.user})
}

export {login, verify}