import HandoverFile from "../models/handoverFileModels.js"

const getHandoverFiles = async (req, res) =>{
    try {
        const handoverfiles = await HandoverFile.find({})
        return res.status(200).json({success:true, handoverfiles})
    } catch (error) {
        return res.status(500).json({success:false, error: "get handoverfiles Server Error"})
    }
}

const getHandoverFile = async (req, res) =>{
    try {
        const {id} = req.params
        const handoverfile = await HandoverFile.findById({_id: id})
        return res.status(200).json({success:true, handoverfile})
    } catch (error) {
        return res.status(500).json({success:false, error: "get handoverfile Server Error"})
    }
}

const addHandoverFile = async (req, res) => {
    try {
        const {
            handoverFiles, 
            handoverDate, 
            giver, 
            receiver, 
        } = req.body
        const newFile = new HandoverFile({
            handoverFiles, 
            handoverDate, 
            giver, 
            receiver,
        })

        await newFile.save()
        return res.status(200).json({success:true, handoverFileId: newFile._id})
    } catch (error) {
       return res.status(500).json({success:false, error: "Add handoverfile Server Error"})
    }
}

/* const updateRespondent = async (req, res) => {
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
} */

export {addHandoverFile, getHandoverFile, getHandoverFiles}