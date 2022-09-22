//REGISTER ROUTES FOR LOG_INFO
import {Router} from 'express'
import {NewEventLog,GetLogId,GetLogDate} from '../controllers/Log.js'

var routerLog = Router()

//INSERT EVENT
routerLog.post('/',NewEventLog)

//GET LOG DATE 
routerLog.get('/date', GetLogDate)

//GET LOG USER
routerLog.get('/:numOto',GetLogId)

//DELETE LOG DATE //NECESARIO???
routerLog.post('/delete', function (req, res) {res.send('deleted')})

export default routerLog;
