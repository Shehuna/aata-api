import mongoose from "mongoose";

const taxTypeSchema = new mongoose.Schema({
    taxTypeCode : {
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

const TaxType = mongoose.model("TaxType", taxTypeSchema)
export default TaxType