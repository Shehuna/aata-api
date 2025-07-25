import mongoose from "mongoose";

const taxYearSchema = new mongoose.Schema({
    taxYearCode : {
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

const TaxYear = mongoose.model("TaxYear", taxYearSchema)
export default TaxYear