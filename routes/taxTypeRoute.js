import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getTaxTypes, addTaxType, getTaxType, updateTaxType, deleteTaxType} from '../controllers/taxTypeController.js'


const router = express.Router()

router.get('/', authMiddleware, getTaxTypes)
router.get('/:id', authMiddleware, getTaxType)
router.post('/add', authMiddleware, addTaxType)
router.put('/:id', authMiddleware, updateTaxType)
router.delete('/:id', authMiddleware, deleteTaxType)


export default router