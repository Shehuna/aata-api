import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import {addAppointment, getAppointments, getAppointmentById, updateAppointment } from '../controllers/appointmentCotroller.js'


const router = express.Router()

router.get('/', authMiddleware, getAppointments)
router.get('/:id', authMiddleware, getAppointmentById)
router.post('/add', authMiddleware, addAppointment)
router.put('/:id', authMiddleware, updateAppointment)
// router.delete('/:id', authMiddleware, deleteRespondent)


export default router