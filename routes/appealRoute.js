import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addAppeal, upload, getAppeals, getAppeal, updateAppeal} from '../controllers/appealController.js'


const router = express.Router()

router.get('/', authMiddleware, getAppeals)
router.get('/:id', authMiddleware, getAppeal)
router.post('/add', authMiddleware, upload.single('appealFile'), addAppeal)
router.put('/:id', authMiddleware, upload.single('appealFile'), updateAppeal)
// router.delete('/:id', authMiddleware, deleteRespondent)


export default router