import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getSubcities, addSubcity, getSubcity, updateSubcity, deleteSubcity} from '../controllers/subcityController.js'


const router = express.Router()

router.get('/', authMiddleware, getSubcities)
router.get('/:id', authMiddleware, getSubcity)
router.post('/add', authMiddleware, addSubcity)
router.put('/:id', authMiddleware, updateSubcity)
router.delete('/:id', authMiddleware, deleteSubcity)


export default router