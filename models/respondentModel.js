import mongoose, { Schema } from "mongoose";

const respondentSchema = new mongoose.Schema({
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

const Respondent = mongoose.model("Respondent", respondentSchema)
export default Respondent