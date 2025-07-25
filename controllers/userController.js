import User from "../models/userModel.js"

const getUsers = async (req, res) =>{
    try {
        const users = await User.find({})
        return res.status(200).json({success:true, users})
    } catch (error) {
        return res.status(500).json({success:false, error: "get users Server Error"})
    }
}

const getUser = async (req, res) =>{
    try {
        const {id} = req.params
        const user = await User.findById({_id: id})
        return res.status(200).json({success:true, user})
    } catch (error) {
        return res.status(500).json({success:false, error: "get user Server Error"})
    }
}

const addUser = async (req, res) => {
    try{
        const {
            userName,
            password,
            fullName,
            role,
        }=req.body

        const user = await User.findOne({userName}) 
        if(user) {
            return res.status(400).json({success: false, error: 'User already exists'})
        }

        const newUser = new User({
            userName,
            password,
            fullName,
            role,
        })
   
        const savedUser = await newUser.save()
        return res.status(200).json({success: true, message: "User created"})
      }
        catch(error){
        console.log(error)
        return res.status(500).json({success: false, error: "server error"})
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params
    const {
        userName,
        password,
        fullName,
        role,
    }=req.body

    const user = await User.findById({_id: id})

    if(!user){
        res.status(404);
        throw new Error('User not found');
    }

    user.userName = userName
    user.fullName = fullName
    user.password = password
    user.role = role
        
    await user.save()

    res.status(200).json({ message: 'Password updated successfully' });
}


export {addUser, getUsers, getUser, updateUser}