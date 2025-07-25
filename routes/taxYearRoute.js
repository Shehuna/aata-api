import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addTaxYear, getTaxYears, getTaxYear, updateTaxYear, deleteTaxYear} from '../controllers/taxYearController.js'


const router = express.Router()

router.get('/', authMiddleware, getTaxYears)
router.get('/:id', authMiddleware, getTaxYear)
router.post('/add', authMiddleware, addTaxYear)
router.put('/:id', authMiddleware, updateTaxYear)
router.delete('/:id', authMiddleware, deleteTaxYear)


export default router