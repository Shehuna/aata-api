import express from 'express'
import cors from 'cors'
import authRouter from './routes/authRoute.js'
import taxYearRouter from './routes/taxYearRoute.js'
import taxTypeRouter from './routes/taxTypeRoute.js'
import categoryRouter from './routes/categoryRoute.js'
import subcityRouter from './routes/subcityRouter.js'
import respondentRouter from './routes/respondentRoute.js'
import appealerRouter from './routes/appealerRoute.js'
import appealRouter from './routes/appealRoute.js'
import appointmentRouter from './routes/appointmentRoute.js'
import decisionRouter from './routes/decisionRoute.js'
import userRouter from './routes/userRoute.js'
import handoverFileRouter from './routes/handoverFileRoute.js'
import connectToDb from './db/db.js'

connectToDb()

const app = express()
app.use(cors({
    origin: "https://aata-rms.vercel.app/",
    credentials: true
}))
app.use(express.json())
app.use(express.static('public/uploads'))
app.use('/api/auth', authRouter)
app.use('/api/taxyear', taxYearRouter)
app.use('/api/taxtype', taxTypeRouter)
app.use('/api/category', categoryRouter)
app.use('/api/subcity', subcityRouter)
app.use('/api/respondent', respondentRouter)
app.use('/api/appealer', appealerRouter)
app.use('/api/appeal', appealRouter)
app.use('/api/appointment', appointmentRouter)
app.use('/api/decision', decisionRouter)
app.use('/api/user', userRouter)
app.use('/api/handover', handoverFileRouter)


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})