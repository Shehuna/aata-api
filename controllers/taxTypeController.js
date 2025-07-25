import TaxType from "../models/taxTypeModel.js"

const getTaxTypes = async (req, res) =>{
    try {
        const taxtypes = await TaxType.find({})
        return res.status(200).json({success:true, taxtypes})
    } catch (error) {
        return res.status(500).json({success:false, error: "get Tax type Server Error"})
    }
}

const getTaxType = async (req, res) =>{
    try {
        const {id} = req.params
        const taxtype = await TaxType.findById({_id: id})
        return res.status(200).json({success:true, taxtype})
    } catch (error) {
        return res.status(500).json({success:false, error: "get Tax Year Server Error"})
    }
}

const addTaxType = async (req, res) => {
    try {
        const {taxTypeCode, description} = req.body
        const newTaxType = new TaxType({
            taxTypeCode,
            description
        })

        await newTaxType.save()
        return res.status(200).json({success:true, taxtype: newTaxType})
    } catch (error) {
       return res.status(500).json({success:false, error: "Add Tax type Server Error"})
    }
}

const updateTaxType = async (req, res) => {
    try {
        const {id} = req.params
        const {taxTypeCode, description} = req.body
        const updateType = await TaxType.findByIdAndUpdate({_id: id}, {
            taxTypeCode,
            description
        })
        return res.status(200).json({success:true, taxtype: updateType})
    } catch (error) {
       return res.status(500).json({success:false, error: "Update Tax type Server Error"})
    }
}

const deleteTaxType = async (req, res) => {
    try {
        const {id} = req.params
        const deletedType = await TaxType.findByIdAndDelete({_id: id})
        return res.status(200).json({success:true, taxtype: deletedType})
    } catch (error) {
       return res.status(500).json({success:false, error: "delete Tax type Server Error"})
    }
}

export {addTaxType, getTaxTypes, getTaxType, updateTaxType, deleteTaxType}