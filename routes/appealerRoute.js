import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getAppealers, addAppealer, getAppealer, updateAppealer, deleteAppealer} from '../controllers/appealerController.js'


const router = express.Router()

router.get('/', authMiddleware, getAppealers)
router.get('/:id', authMiddleware, getAppealer)
router.post('/add', authMiddleware, addAppealer)
router.put('/:id', authMiddleware, updateAppealer)
router.delete('/:id', authMiddleware, deleteAppealer)


export default router