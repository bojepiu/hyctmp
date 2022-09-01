import express from 'express'
import routerMain from './routes/index.js'
import {ConnectDB} from './db.js'

ConnectDB()
const app=express()
app.use(express.json())
app.use(routerMain)


export default app;