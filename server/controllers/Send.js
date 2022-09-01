import {SendSchema} from '../models/Send.js'
import mongoose from 'mongoose'
import {MONGO_URI} from '../config.js'

mongoose.connect(MONGO_URI).catch(err=>{console.log(err)})
const Send= mongoose.model('Send',SendSchema);

export async function InitSend(send){
    try {
        var s=await send.save()
        console.log(s)
        if(!s)return {error:'register failed'}
        return {message:'registered'}
    } catch (error) {
        return {error:error.message||error}
    }
}

export async function UpdateSend(send){
    return send
}

export function FinishSend(send){
    return send
}

export function DoneSend(send){
    return send
}

export function DleteSend(send){
    return send
}

// var x= new Send({num_oto:'asd',date:new Date(),user_name:"asdasd",action:"xdd",user_id:"sadasd",status:"success",
// date_finish_uploaded:new Date(),date_init_upload:new Date(),upload_url:"asd",total_parts:2,file_size:"sasd",file_name:"sssasd",send_id:"asd"})
// SaveSend(x).then(r=>{
//     console.log(r)
// })
// mongoose.disconnect()


//db.createUser({user: "admindb" , pwd: "secret", roles: [  "readWriteAnyDatabase" ]})