//REGISTER ROUTES FOR SEND FILES
import {Router} from 'express'

var routerSend = Router()

//GET 
routerSend.get('/:id', function (req, res) {return res.send(req.params.id)})

//GET SENDS PER USER userId
routerSend.get('/user/:id', function (req, res) {return res.send(req.params.id)})

//GET SENDS PER DATE initDate endDate
routerSend.get('/date/:id', function (req, res) {return res.send(req.params.id)})

//NEW //UPDATE  //FINISH
routerSend.post('/', function (req, res) {res.send(req.body)})

//DELETE
routerSend.delete('/:id', function (req, res) {res.send('hola pianola')})

export default routerSend;