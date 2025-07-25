import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addUser, getUser, getUsers, updateUser} from '../controllers/userController.js'


const router = express.Router()

router.get('/', authMiddleware, getUsers)
router.get('/:id', authMiddleware, getUser)
router.post('/add', authMiddleware, addUser)
router.put('/:id', authMiddleware, updateUser)
// router.delete('/:id', authMiddleware, deleteRespondent)


export default router