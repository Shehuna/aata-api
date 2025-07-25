import mongoose from "mongoose";

const subcitySchema = new mongoose.Schema({
    subcityCode : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
},{
    timestamps: true
})

const Subcity = mongoose.model("Subcity", subcitySchema)
export default Subcity