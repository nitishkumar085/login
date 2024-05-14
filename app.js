import express from "express";
import router from './routes/userRoutes.js'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())


app.use('/api/v1/user',router)
export default app