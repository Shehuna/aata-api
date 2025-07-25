import mongoose, { Schema } from "mongoose";

const decisionSchema = new mongoose.Schema({
    appeal: {
        type: Schema.Types.ObjectId, 
        ref: "Appeal",
        required: true
    },
    finalDecisionDate : {
        type: String,
        required: true
    },
    judgeComment : {
        type: String,
        required: true
    },
    decisionFilePath : {
        type: String,
        required: true
    },
},{
    timestamps: true
})

const Decision = mongoose.model("Decision", decisionSchema)
export default Decision