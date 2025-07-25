import mongoose, { Schema } from "mongoose";

const appointmentSchema = new mongoose.Schema({
    appeal: {
        type: Schema.Types.ObjectId, 
        ref: "Appeal",
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    appointmentNo : {
        type: String,
        required: true
    },
    appointmentSetDate : {
        type: String,
        
    },
    nextAppointmentDate: {
        type: String,
        required: true
    },
    appointmentTime : {
        type: String,
        required: true
    },
    reason : {
        type: String,
        required: true
    },
    comment : {
        type: String,
    },
},{
    timestamps: true
})

const Appointment = mongoose.model("Appointment", appointmentSchema)
export default Appointment