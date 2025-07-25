import mongoose, { Schema } from "mongoose";

const handoverFileSchema = new mongoose.Schema({
    handoverFiles: [
        {
            appeal: {
                    type: Schema.Types.ObjectId, 
                    ref: "Appeal", 
                    required: true
            },
            fileStatus: {
                    type: String,
                    required: true
            }
        }
    ],
    handoverDate : {
        type: String,
        required: true
    },
    giver : {
        type: String,
        required: true
    },
    receiver : {
        type: String,
        required: true
    },
},{
    timestamps: true
})

const HandoverFile = mongoose.model("HandoverFile", handoverFileSchema)
export default HandoverFile