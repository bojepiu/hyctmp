// import Auth from '../models/authModel'

import randomstring from 'randomstring'
import { generateKeys,createFernetKey } from '../libs/crypto.js'
import CreateUserModel from '../models/Auth.js'

const LENGTH_PWD=32
const LENGTH_MFA=16

export const NewUser = async (req, res) =>{
    try{
        const {shortName, email, pathSftp, numOto } = req.body
        if(!shortName || !email || !pathSftp || !numOto){
            return res.send({error:400,message:"Parameters required not found"},400)
        }
        var password=randomstring.generate({length:LENGTH_PWD})
        var passPhrase=randomstring.generate({length:LENGTH_PWD})
        var mfaCode=randomstring.generate({length:LENGTH_MFA})
        var username='UF'+numOto
        var keyPair=await generateKeys(shortName, email, 'asdad')
        var privateKey=keyPair.privateKey
        var publicKey=keyPair.publicKey
        var fernetKey= createFernetKey(password).secret
        var revocationCertificate=keyPair.revocationCertificate
        //Esto despues de validar que no existe el usuario
        var validated=false
        var enabled=false
        var dateCreated=new Date()
        console.log(fernetKey)
        var createUser=new  CreateUserModel({username,shortName,email,password,pathSftp,numOto,publicKey,privateKey,passPhrase,mfaCode,validated,enabled,dateCreated})
        return res.send({'message':'Created User',fernetKey})
    }
    catch(err){
        return res.send({'error':'true','message':err.message})
    }
}

// export const login = (req, res) => {
//     return new Promise((resolve, reject) => {
//     Auth.login(req, res, (err) => {
//       if (err) {
//         return reject(err)
//       }
//       return resolve()
//     })
// createUser({body:{shortName:'asdasd', email:'asdasdasd@gmail.com', numOto:'asdasdasd',pathSftp:'s'}}).then((user) => {
//     console.log(user)
// }).catch((err) => {
//     console.log(err)
// })