import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getRespondents, addRespondent, getRespondent, updateRespondent, deleteRespondent} from '../controllers/respondentController.js'


const router = express.Router()

router.get('/', authMiddleware, getRespondents)
router.get('/:id', authMiddleware, getRespondent)
router.post('/add', authMiddleware, addRespondent)
router.put('/:id', authMiddleware, updateRespondent)
router.delete('/:id', authMiddleware, deleteRespondent)


export default router