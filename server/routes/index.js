import {Router} from 'express'
import routesUser from './routesUser.js'
import routesLog from './routesLog.js'
import routesSend from './routesSend.js'
import routesReceived from './routesReceived.js'

var routerMain= Router()

routerMain.use('/api/v1/auth/',routesUser)
routerMain.use('/api/v1/send/',routesSend)
routerMain.use('/api/v1/log/',routesLog)
routerMain.use('/api/v1/received/',routesReceived)

export default routerMain;

