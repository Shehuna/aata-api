import mongoose from "mongoose";

const connectToDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log(error)
    }
}

export default connectToDb