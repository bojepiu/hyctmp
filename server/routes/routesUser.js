//REGISTER ROUTES FOR LOG_INFO
import {Router} from 'express'
import {NewUser} from '../controllers/User.js'
var routerAuth = Router()

//NEW USER 
routerAuth.post('/', NewUser)

//VALIDATE USER MFA or EMAIL?
routerAuth.post('/mfa/:id', function (req, res) {res.send('Valida al usuario')})

//UPDATE USER (CHANGE PASSWORD AND KEYS) 
routerAuth.post('/update/:id', function (req, res) {res.send('Actualiza al usuario cambian los valores indicados')})

//RESET SOFT USER (CHANGE PASSWORD) 
routerAuth.post('/reset/:id', function (req, res) {res.send('Reestablecer usuario contraseña')})

//RESET HARD USER (CHANGE PASSWORD AND KEYS) 
routerAuth.post('/reset/:id', function (req, res) {res.send('Reestablecer usuario contraseña y llaves,necesario volver a validar')})

//BLOCK USER
routerAuth.post('/disable/:id', function (req, res) {res.send('Deshabilita al usuario')})

//DELETE USER
routerAuth.delete('/delete/:id', function (req, res) {res.send('Deshabilita al usuario')})

//ADD CHILDREN TO USER
routerAuth.delete('/child/:numOto', function (req, res) {res.send('Deshabilita al usuario')})

export default routerAuth;