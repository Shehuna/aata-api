import Appealer from "../models/appealerModel.js"

const getAppealers = async (req, res) =>{
    try {
        const appealers = await Appealer.find({}).populate('subcity')
        return res.status(200).json({success:true, appealers})
    } catch (error) {
        return res.status(500).json({success:false, error: "get appealers Server Error"})
    }
}

const getAppealer = async (req, res) =>{
    try {
        const {id} = req.params
        const appealer = await Appealer.findById({_id: id})
        return res.status(200).json({success:true, appealer})
    } catch (error) {
        return res.status(500).json({success:false, error: "get appealer Server Error"})
    }
}

const addAppealer = async (req, res) => {
    try {
        const {fullName, city, subcity, wereda, houseNo} = req.body
        const newAppealer = new Appealer({
            fullName,
            city,
            subcity,
            wereda,
            houseNo
        })

        await newAppealer.save()
        return res.status(200).json({success:true, appealer: newAppealer})
    } catch (error) {
       return res.status(500).json({success:false, error: "Add appealer Server Error"})
    }
}

const updateAppealer = async (req, res) => {
    try {
        const {id} = req.params
        const {fullName, city, subcity, wereda, houseNo} = req.body
        const updateAppealer = await Appealer.findByIdAndUpdate({_id: id}, {
            fullName,
            city,
            subcity,
            wereda,
            houseNo
        })
        return res.status(200).json({success:true, appealer: updateAppealer})
    } catch (error) {
       return res.status(500).json({success:false, error: "Update appealer Server Error"})
    }
}

const deleteAppealer = async (req, res) => {
    try {
        const {id} = req.params
        const deletedAppealer = await Appealer.findByIdAndDelete({_id: id})
        return res.status(200).json({success:true, appealer: deletedAppealer})
    } catch (error) {
       return res.status(500).json({success:false, error: "delete appealer Server Error"})
    }
}

export {addAppealer, getAppealers, getAppealer, updateAppealer, deleteAppealer}