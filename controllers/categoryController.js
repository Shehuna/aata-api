import Category from "../models/categoryModel.js"

const getCategories = async (req, res) =>{
    try {
        const categories = await Category.find({})
        return res.status(200).json({success:true, categories})
    } catch (error) {
        return res.status(500).json({success:false, error: "get categories Server Error"})
    }
}

const getCategory = async (req, res) =>{
    try {
        const {id} = req.params
        const category = await Category.findById({_id: id})
        return res.status(200).json({success:true, category})
    } catch (error) {
        return res.status(500).json({success:false, error: "get category Server Error"})
    }
}

const addCategory = async (req, res) => {
    try {
        const {catCode, description} = req.body
        const newCategory = new Category({
            catCode,
            description
        })

        await newCategory.save()
        return res.status(200).json({success:true, category: newCategory})
    } catch (error) {
       return res.status(500).json({success:false, error: "Add Category Server Error"})
    }
}

const updateCategory = async (req, res) => {
    try {
        const {id} = req.params
        const {catCode, description} = req.body
        const updateCategory = await Category.findByIdAndUpdate({_id: id}, {
            catCode,
            description
        })
        return res.status(200).json({success:true, category: updateCategory})
    } catch (error) {
       return res.status(500).json({success:false, error: "Update Category Server Error"})
    }
}

const deleteCategory = async (req, res) => {
    try {
        const {id} = req.params
        const deletedCat = await Category.findByIdAndDelete({_id: id})
        return res.status(200).json({success:true, category: deletedCat})
    } catch (error) {
       return res.status(500).json({success:false, error: "delete Category Server Error"})
    }
}

export {addCategory, getCategories, getCategory, updateCategory, deleteCategory}