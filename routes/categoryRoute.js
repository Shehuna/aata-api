import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getCategories, getCategory, addCategory, updateCategory, deleteCategory} from '../controllers/categoryController.js'


const router = express.Router()

router.get('/', authMiddleware, getCategories)
router.get('/:id', authMiddleware, getCategory)
router.post('/add', authMiddleware, addCategory)
router.put('/:id', authMiddleware, updateCategory)
router.delete('/:id', authMiddleware, deleteCategory)


export default router