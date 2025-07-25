import Subcity from "../models/subcityModel.js"

const getSubcities = async (req, res) =>{
    try {
        const subcities = await Subcity.find({})
        return res.status(200).json({success:true, subcities})
    } catch (error) {
        return res.status(500).json({success:false, error: "get subcities Server Error"})
    }
}

const getSubcity = async (req, res) =>{
    try {
        const {id} = req.params
        const subcity = await Subcity.findById({_id: id})
        return res.status(200).json({success:true, subcity})
    } catch (error) {
        return res.status(500).json({success:false, error: "get subcity Server Error"})
    }
}

const addSubcity = async (req, res) => {
    try {
        const {subcityCode, description} = req.body
        const newSubcity = new Subcity({
            subcityCode,
            description
        })

        await newSubcity.save()
        return res.status(200).json({success:true, subcity: newSubcity})
    } catch (error) {
       return res.status(500).json({success:false, error: "Add subcity Server Error"})
    }
}

const updateSubcity = async (req, res) => {
    try {
        const {id} = req.params
        const {subcityCode, description} = req.body
        const updateSubcity = await Subcity.findByIdAndUpdate({_id: id}, {
            subcityCode,
            description
        })
        return res.status(200).json({success:true, subcity: updateSubcity})
    } catch (error) {
       return res.status(500).json({success:false, error: "Update subcity Server Error"})
    }
}

const deleteSubcity = async (req, res) => {
    try {
        const {id} = req.params
        const deletedSubcity = await Subcity.findByIdAndDelete({_id: id})
        return res.status(200).json({success:true, subcity: deletedSubcity})
    } catch (error) {
       return res.status(500).json({success:false, error: "delete subcity Server Error"})
    }
}

export {addSubcity, getSubcities, getSubcity, updateSubcity, deleteSubcity}