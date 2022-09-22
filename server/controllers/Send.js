import { request } from 'express'
import Send from '../models/Send.js'

//INIT UPLOAD
export async function NewSend(req,res){
    try {
        var js=req.body
        if(!js.user_name || !js.file_name || !js.file_size || !js.user_id || !js.send_id ){
            return res.send({'error':'Bad request, parameters required not provided'})
        }
        var date_init_upload=new Date()
        var status='init'
        var newSend=new Send({send_id:js.send_id,user_id:js.user_id,file_name:js.file_name,
            file_size:js.file_size,date_init_upload,status
        })
        var save=await newSend.save()
        if(save){
            console.log(save)
        }
        return res.send({'message':"Save Success"})//MANDAR _id???
    } catch (error) {
        //Hacer el manejo de errores segun sea el caso para no dar info de mas
        if(error.code === 11000)//DUPLICATE ID
        return res.send({error:'ID Duplicate',status:error.code})
        return res.send({error:error.message||error})
    }
}
//FINISH UPLOAD
export async function UpdateSend(req,res){
    try {
        var js=req.body
        if(!js.send_id){
            return res.send({'error':'Bad request, parameters required not provided'}).status(400)
        }
        var sendObject=await Send.findOne({send_id:js.send_id})
        console.log(sendObject)
        if(sendObject){
            return res.send({'message':'Found'})
        }
        return res.send({error:'ID not found'})
    } catch (error) {
        return res.send({error:error.message})
    }
}

//UPLOAD SFTP
export async function UploadSFTP(req,res){
    try {
        var js=req.body
        if(!js.send_id || js.user_id){
            return res.send({'error':'Bad request, parameters required not provided'}).status(400)
        }
        var sendObject=await Send.findOne({send_id:js.send_id}).status(200)
        if(sendObject){

        }else{
            return res.send({error:'ID not found'}).status(404)
        }
    } catch (error) {
        return res.send({error:error.message})
    }
}

//ONLY CHANGED STATUS TO DELETED
export function DleteSend(req,res){
    try {
        var js= req.body
        if(!js.user_id || !js.send_id){
            return res.send({error:'Bad request, parameters required not provided'}).status(400)
        }
        //Validar que existe el envio
    } catch (error) {
        return res.send({error:error.message})
    }
}

// var x= new Send({num_oto:'asd',date:new Date(),user_name:"asdasd",action:"xdd",user_id:"sadasd",status:"success",
// date_finish_uploaded:new Date(),date_init_upload:new Date(),upload_url:"asd",total_parts:2,file_size:"sasd",file_name:"sssasd",send_id:"asd"})
// SaveSend(x).then(r=>{
//     console.log(r)
// })
// mongoose.disconnect()
// db.createUser({user: "admindb" , pwd: "secret", roles: [  "readWriteAnyDatabase" ]})