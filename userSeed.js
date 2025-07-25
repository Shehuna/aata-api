import User from "./models/userModel.js";
import bcrypt from 'bcrypt'
import connectToDb from "./db/db.js";

const userRegister = async () =>{
    connectToDb()
    try {
        const hashPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            userName: "Admin",
            password: hashPassword,
            role: "admin"
        })

        await newUser.save()
    } catch (error) {
        
    }
}

userRegister()