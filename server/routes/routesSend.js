//REGISTER ROUTES FOR SEND FILES
import {Router} from 'express'
import { NewSend,UpdateSend} from '../controllers/Send.js'

var routerSend = Router()

//NEW
routerSend.post('/', NewSend)

//FINISHED UPLOADED
routerSend.post('/update',UpdateSend)

//GET 
routerSend.get('/:id', function (req, res) {return res.send(req.params.id)})

//GET SENDS PER USER userId
routerSend.get('/user/:id', function (req, res) {return res.send(req.params.id)})

//GET SENDS PER DATE initDate endDate
routerSend.get('/date/:id', function (req, res) {return res.send(req.params.id)})

//DELETE
routerSend.delete('/:id', function (req, res) {res.send('hola pianola')})

export default routerSend;