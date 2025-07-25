import path from "path"
import Decision from "../models/decisionModel.js"
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

const getDecisions = async (req, res) =>{
    try {
        const decisions = await Decision.find({}).populate({
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
        }).
        populate({
             path: 'appeal',
             populate: {
                path: 'taxtype',   
            },
        }).
        populate({
             path: 'appeal',
             populate: {
                path: 'taxyear',   
            },
        })
        return res.status(200).json({success:true, decisions})
    } catch (error) {
        return res.status(500).json({success:false, error: "get Decisions Server Error"})
    }
}

const getDecision = async (req, res) =>{
    const {id} = req.params
    try {
        const decision = await Decision.findById({_id: id})
        return res.status(200).json({success:true, decision})
    } catch (error) {
        return res.status(500).json({success:false, error: "get decision Server Error"})
    }
} 

const addDecision = async (req, res) => {
    try {
        const {
            appeal, 
            finalDecisionDate, 
            judgeComment, 
            } = req.body
        const newDecision = new Decision({
            appeal, 
            finalDecisionDate, 
            judgeComment,
            decisionFilePath: req.file ? req.file.filename : "",
        })

        await newDecision.save()
        return res.status(200).json({success:true, message: 'Decision Created'})
    } catch (error) {
       return res.status(500).json({success:false, error: "Add respondent Server Error"})
    }
}

const updateDecision = async (req, res) => {
    const {id} = req.params
    try {
        const {
            appeal, 
            finalDecisionDate, 
            judgeComment,
            decisionFilePath,
            } = req.body
        const updatedDecision= await Decision.findByIdAndUpdate({_id: id},{
            appeal, 
            finalDecisionDate, 
            judgeComment,
            decisionFilePath: req.file ? req.file.filename : decisionFilePath,
        })

        return res.status(200).json({success: true, message: 'Decision updated'})
    } catch (error) {
       return res.status(500).json({success:false, error: "Update Decision Server Error"})
    }
}



export {addDecision, getDecision, getDecisions, updateDecision, upload}