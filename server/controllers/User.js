// import Auth from '../models/authModel'

import { response } from 'express'
import randomstring from 'randomstring'
import { generateKeys,createFernetKey } from '../libs/crypto.js'
import User from '../models/User.js'

const LENGTH_PWD=32
const LENGTH_MFA=16

const ExistUser=async (num_oto)=>{
    try {
        let res=await User.findOne({numOto:num_oto})
        console.log(res)   
        return {response:res}
    } catch (error) {
        return {error: error.message}
    }
}

export const NewUser = async (req, res) =>{
    try{
        const {shortName, email, pathSftp, numOto } = req.body
        if(!shortName || !email || !pathSftp || !numOto){
            return res.send({error:400,message:"Parameters required not found"},400)
        }
        if(ExistUser(numOto)){
            return res.send({error:400,message:"User already exists"})
        }
        var password=randomstring.generate({length:LENGTH_PWD})
        var passPhrase=randomstring.generate({length:LENGTH_PWD})
        var mfaCode=randomstring.generate({length:LENGTH_MFA})
        var username='UF'+numOto
        var keyPair=await generateKeys(shortName, email, 'asdad')
        var privateKey=keyPair.privateKey
        var publicKey=keyPair.publicKey
        var fernetKey= createFernetKey(password).secret
        var validated=false
        var enabled=false
        var dateCreated=new Date()
        console.log(fernetKey)
        var createUser=new  User({username,shortName,email,password,
            pathSftp,numOto,publicKey,privateKey,passPhrase,
            mfaCode,validated,enabled,dateCreated
        })
        await createUser.save()
        return res.send({'message':'Created User',fernetKey})
    }
    catch(err){
        return res.send({'error':'true','message':err.message})
    }
}

export const ValidateUser = (req,res) =>{
    try {
        console.log('Activate MFA/Email? User')
        if(!req.body.user_id || !req.body.mfa_code){
            return res.send({'error':'Invalid parameters'}).status(400)
        }
        //Mail validate shared key if mfa calculate code??????
        //Funcion aun no creada para validar
        if(true)return res.send({meesage:"Validation Success"})
        return res.send({error:"Code Error"})
    } catch (error) {
        return res.send({error:error.message})
    }
}

export const EditUser = async (req, res) =>{
    try {
        //Only editables fields! PASSWORD NAME ¿¿¿NUM_OTO??? 
        console.log('Edit User')
        var update= await User.findByIdAndUpdate(req.params.id, req.body)
        update.save()
        return res.send({'message':'Updated User'})
    } catch (error) {
        return res.send({error:error.message})
    }
}

export const DisableEnableUser= async (req, res) =>{
    try {
        console.log('Disable/Enable User')
        if(!req.params.numOto || req.body.enabled==undefined){
            return res.send({error:'Bad params'})
        }
        var num_oto = req.params.numOto
        var enabled= req.params.enabled
        await User.findOneAndUpdate(req.params.id,{enabled:false})
        return {"message":'Disabled User'}
    } catch (error) {
        return res.send({error:error.message})
    }
}

export const DeleteUser= async (req, res) =>{
    try {
        console.log('Delete User')
        //Solo eliminar el user o todo?
        //Delete Sended and Received files?  
        await User.findOneAndDelete(req.params.id,{enabled:false} )
        res.send({message:"User deleted"})
    } catch (error) {
        res.send({error:error.message})
    }   
}

export const ResetPassword= async (req, res) =>{
    try {
        //Reset password
        return true
    } catch (error) {
        return false       
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