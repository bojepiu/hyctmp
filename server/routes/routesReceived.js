//REGISTER ROUTES FOR SEND FILES
import {Router} from 'express'

var routerReceived = Router()

//GET 
routerReceived.get('/:id', function (req, res) {return res.send(req.params.id)})

//GET RECEIVED PER USER userId  ?initDate ?endDate optionals 
routerReceived.get('/user/:id', function (req, res) {return res.send(req.params.id)})

//GET RECEIVED PER DATE initDate endDate
routerReceived.get('/date/:id', function (req, res) {return res.send(req.params.id)})

//NEW //UPDATE //DOWNLOADED
routerReceived.post('/', function (req, res) {res.send(req.body)})

//DELETE UPDATE REGISTER DOWNLOADED AND DELETED FROM CLIENT
routerReceived.delete('/:id', function (req, res) {res.send('hola pianola')})

export default routerReceived;