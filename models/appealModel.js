import mongoose, { Schema } from "mongoose";

const appealSchema = new mongoose.Schema({
    appealer: {
        type: Schema.Types.ObjectId, 
        ref: "Appealer",
        required: true
    },
    respondent: {
        type: Schema.Types.ObjectId, 
        ref: "Respondent", 
        required: true
    },
    taxyear: {
        type: Schema.Types.ObjectId, 
        ref: "TaxYear", 
        required: true
    },
    taxtype: {
        type: Schema.Types.ObjectId, 
        ref: "TaxType", 
        required: true
    },
    category: {
        type: Schema.Types.ObjectId, 
        ref: "Category", 
        required: true
    },
    courtName : {
        type: String,
    },
    fileOpeningDate : {
        type: String,
        required: true
    },
    fileNo : {
        type: String,
        required: true
    },
    appealStatus : {
        type: String,
        required: true
    },
   
    teamLeaderComment : {
        type: String,
    },
    
    appealFilePath : {
        type: String,
        required: true
    },
   
},{
    timestamps: true
})

const Appeal = mongoose.model("Appeal", appealSchema)
export default Appeal