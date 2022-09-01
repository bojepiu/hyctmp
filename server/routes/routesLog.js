//REGISTER ROUTES FOR LOG_INFO
import {Router} from 'express'

var routerLog = Router()

//INSERT EVENT
routerLog.post('/', function (req, res) {res.send('Inserta Evento')})

//GET LOG DATE 
routerLog.post('/date', function (req, res) {res.send('Obtiene Eventos por fecha')})

//GET LOG USER
routerLog.get('/user/:id', function (req, res) {res.send(req.params.id)})

//DELETE LOG DATE
routerLog.post('/delete', function (req, res) {res.send(req.params.id)})

export default routerLog;
