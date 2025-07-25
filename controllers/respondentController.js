import Respondent from "../models/respondentModel.js"

const getRespondents = async (req, res) =>{
    try {
        const respondents = await Respondent.find({}).populate('subcity')
        return res.status(200).json({success:true, respondents})
    } catch (error) {
        return res.status(500).json({success:false, error: "get respondents Server Error"})
    }
}

const getRespondent = async (req, res) =>{
    try {
        const {id} = req.params
        const respondent = await Respondent.findById({_id: id})
        return res.status(200).json({success:true, respondent})
    } catch (error) {
        return res.status(500).json({success:false, error: "get respondent Server Error"})
    }
}

const addRespondent = async (req, res) => {
    try {
        const {fullName, city, subcity, wereda, houseNo} = req.body
        const newRespondent = new Respondent({
            fullName,
            city,
            subcity,
            wereda,
            houseNo
        })

        await newRespondent.save()
        return res.status(200).json({success:true, respondent: newRespondent})
    } catch (error) {
       return res.status(500).json({success:false, error: "Add respondent Server Error"})
    }
}

const updateRespondent = async (req, res) => {
    try {
        const {id} = req.params
        const {fullName, city, subcity, wereda, houseNo} = req.body
        const updateRespondent = await Respondent.findByIdAndUpdate({_id: id}, {
            fullName,
            city,
            subcity,
            wereda,
            houseNo
        })
        return res.status(200).json({success:true, respondent: updateRespondent})
    } catch (error) {
       return res.status(500).json({success:false, error: "Update respondent Server Error"})
    }
}

const deleteRespondent = async (req, res) => {
    try {
        const {id} = req.params
        const deletedRespondent = await Respondent.findByIdAndDelete({_id: id})
        return res.status(200).json({success:true, respondent: deletedRespondent})
    } catch (error) {
       return res.status(500).json({success:false, error: "delete respondent Server Error"})
    }
}

export {addRespondent, getRespondents, getRespondent, updateRespondent, deleteRespondent}