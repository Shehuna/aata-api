import mongoose, { Schema } from "mongoose";

const appealerSchema = new mongoose.Schema({
    subcity: {
        type: Schema.Types.ObjectId, 
        ref: "Subcity", 
    },
    fullName : {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    wereda : {
        type: String,
    },
    houseNo : {
        type: String,
    },
},{
    timestamps: true
})

const Appealer = mongoose.model("Appealer", appealerSchema)
export default Appealer