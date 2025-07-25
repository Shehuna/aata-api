import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getHandoverFiles, addHandoverFile, getHandoverFile} from '../controllers/handoverFileController.js'


const router = express.Router()

router.get('/', authMiddleware, getHandoverFiles)
router.get('/:id', authMiddleware, getHandoverFile)
router.post('/add', authMiddleware, addHandoverFile)
// router.put('/:id', authMiddleware, updateRespondent)
// router.delete('/:id', authMiddleware, deleteRespondent)


export default router