import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addDecision, upload, getDecisions, getDecision, updateDecision} from '../controllers/decisionController.js'


const router = express.Router()

router.get('/', authMiddleware, getDecisions)
router.get('/:id', authMiddleware, getDecision)
router.post('/add', authMiddleware, upload.single('decisionFile'), addDecision)
router.put('/:id', authMiddleware, upload.single('decisionFile'), updateDecision)
// router.delete('/:id', authMiddleware, deleteRespondent)


export default router