import TaxYear from "../models/taxYearModel.js"

const getTaxYears = async (req, res) =>{
    try {
        const taxyears = await TaxYear.find({})
        return res.status(200).json({success:true, taxyears})
    } catch (error) {
        return res.status(500).json({success:false, error: "get Tax Year Server Error"})
    }
}

const getTaxYear = async (req, res) =>{
    try {
        const {id} = req.params
        const taxyear = await TaxYear.findById({_id: id})
        return res.status(200).json({success:true, taxyear})
    } catch (error) {
        return res.status(500).json({success:false, error: "get Tax Year Server Error"})
    }
}

const addTaxYear = async (req, res) => {
    try {
        const {taxYearCode, description} = req.body
        const newTaxYear = new TaxYear({
            taxYearCode,
            description
        })

        await newTaxYear.save()
        return res.status(200).json({success:true, taxYear: newTaxYear})
    } catch (error) {
       return res.status(500).json({success:false, error: "Add Tax Year Server Error"})
    }
}

const updateTaxYear = async (req, res) => {
    try {
        const {id} = req.params
        const {taxYearCode, description} = req.body
        const updateYear = await TaxYear.findByIdAndUpdate({_id: id}, {
            taxYearCode,
            description
        })
        return res.status(200).json({success:true, taxYear: updateYear})
    } catch (error) {
       return res.status(500).json({success:false, error: "Update Tax Year Server Error"})
    }
}

const deleteTaxYear = async (req, res) => {
    try {
        const {id} = req.params
        const deletedYear = await TaxYear.findByIdAndDelete({_id: id})
        return res.status(200).json({success:true, taxYear: deletedYear})
    } catch (error) {
       return res.status(500).json({success:false, error: "delete Tax Year Server Error"})
    }
}

export {addTaxYear, getTaxYears, getTaxYear, updateTaxYear, deleteTaxYear}