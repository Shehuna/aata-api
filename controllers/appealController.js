import path from "path"
import Appeal from "../models/appealModel.js"
import multer from 'multer'


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads")
    },

    filename: (req, file, cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

const getAppeals = async (req, res) =>{
    try {
        const appeals = await Appeal.find({}).
        populate('appealer').
        populate('respondent').
        populate('category').
        populate('taxyear').
        populate('taxtype')
        
        return res.status(200).json({success:true, appeals})
    } catch (error) {
        return res.status(500).json({success:false, error: "get Appeals Server Error"})
    }
}

const getAppeal = async (req, res) =>{
    const {id} = req.params
    try {
        const appeal = await Appeal.findById({_id: id}).
        populate('appealer').
        populate('respondent').
        populate('category').
        populate('taxyear').
        populate('taxtype')
        
        
        return res.status(200).json({success:true, appeal})
    } catch (error) {
        return res.status(500).json({success:false, error: "get Appeal Server Error"})
    }
} 

const addAppeal = async (req, res) => {
    try {
        const {
            appealer, 
            respondent, 
            taxyear, 
            taxtype, 
            category,
            courtName,
            fileOpeningDate,
            fileNo,
            } = req.body
        const newAppeal = new Appeal({
            appealer, 
            respondent, 
            taxyear, 
            taxtype, 
            category,
            courtName,
            fileOpeningDate,
            fileNo,
            appealStatus: "new",
            appealFilePath: req.file ? req.file.filename : "",
            teamLeaderComment: '',
        })

        await newAppeal.save()
        return res.status(200).json({success:true, message: 'Appeal Created'})
    } catch (error) {
       return res.status(500).json({success:false, error: "Add respondent Server Error"})
    }
}

const updateAppeal = async (req, res) => {
    const {id} = req.params
    try {
        const {
            appealer, 
            respondent, 
            taxyear, 
            taxtype, 
            category,
            courtName,
            fileOpeningDate,
            fileNo,
            appealStatus,
            appealFilePath,
            teamLeaderComment,
            } = req.body
        const updatedAppeal = await Appeal.findByIdAndUpdate({_id: id},{
            appealer, 
            respondent, 
            taxyear, 
            taxtype, 
            category,
            courtName,
            fileOpeningDate,
            fileNo,
            appealStatus,
            appealFilePath: req.file ? req.file.filename : appealFilePath,
            teamLeaderComment,
        })

        return res.status(200).json({success: true, message: 'Appeal updated'})
    } catch (error) {
       return res.status(500).json({success:false, error: "Update respondent Server Error"})
    }
}



export {addAppeal, getAppeals, getAppeal, updateAppeal, upload}