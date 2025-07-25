import Appointment from "../models/appointmentModel.js"


const getAppointments = async (req, res) =>{
    try {
        const appointments = await Appointment.find({}).
        populate({
            path: 'appeal',
            populate: {
                path: 'appealer',   
            },
        }).
        populate({
             path: 'appeal',
             populate: {
                path: 'respondent',   
            },
        }).populate('user')
        return res.status(200).json({success:true, appointments})
    } catch (error) {
        return res.status(500).json({success:false, error: "get appointments Server Error"})
    }
}

const getAppointmentById = async (req, res) =>{
    const {id} = req.params
    try{
        const appointment = await Appointment.findById({_id: id}).
         populate({
            path: 'appeal',
            populate: {
                path: 'appealer',   
            },
        }).
        populate({
             path: 'appeal',
             populate: {
                path: 'respondent',   
            },
        }).populate('user')
    if (appointment){
        return res.status(200).json({success:true, appointment})
    }
    else {
       const appointments = await Appointment.find({appeal: id})
       if (appointments){
         return res.status(200).json({success:true, appointments})
       }
     }
    }catch(error){
        return res.status(500).json({success:false, error: "get Appointment Server Error"})
    }  
    
} 

const addAppointment = async (req, res) => {
     try {
        const {
            appeal, 
            user, 
            appointmentNo,
            appointmentSetDate, 
            nextAppointmentDate, 
            appointmentTime, 
            reason, 
            comment
        } = req.body
        const newAppointment = new Appointment({
            appeal, 
            user, 
            appointmentNo,
            appointmentSetDate, 
            nextAppointmentDate, 
            appointmentTime, 
            reason, 
            comment
        })

        await newAppointment.save()
        return res.status(200).json({success:true, appointment: newAppointment})
    } catch (error) {
        console.log(error)
       return res.status(500).json({success:false, error: "Add Appointment Server Error"})
    }
}

const updateAppointment = async (req, res) => {
    try {
        const {id} = req.params
        const {
            appeal,
            appointmentNo,
            appointmentSetDate,
            nextAppointmentDate,
            user,
            appointmentTime,
            reason,
            comment
        } = req.body
        const updateAppointment = await Appointment.findByIdAndUpdate({_id: id}, {
            appeal,
            appointmentNo,
            appointmentSetDate,
            nextAppointmentDate,
            user,
            appointmentTime,
            reason,
            comment
        })
        return res.status(200).json({success:true, respondent: updateAppointment})
    } catch (error) {
       return res.status(500).json({success:false, error: "Update Appointment Server Error"})
    }
}

/* const deleteRespondent = async (req, res) => {
    try {
        const {id} = req.params
        const deletedRespondent = await Respondent.findByIdAndDelete({_id: id})
        return res.status(200).json({success:true, respondent: deletedRespondent})
    } catch (error) {
       return res.status(500).json({success:false, error: "delete respondent Server Error"})
    }
}  */

export {addAppointment, getAppointments, getAppointmentById, updateAppointment}