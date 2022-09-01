import {LogSchema} from '../models/Log.js'
import mongoose from 'mongoose'
import {MONGO_URI} from '../config.js'

mongoose.connect(MONGO_URI).catch(err=>{console.log(err)})
const Log= mongoose.model('Log',LogSchema);

export async function SaveLog(log){
    try {
        var s=await log.save()
        if(!s)return {error:'register failed'}
        return {message:'registered'}
    } catch (error) {
        return {error:error.message||error}
    }
}


var x= new Log({num_oto:'asd',date:new Date(),user_name:"asdasd",action:"xdd",user_id:"sadasd"})
SaveLog(x).then(r=>{
    console.log(r)
})
mongoose.disconnect()


//db.createUser({user: "admindb" , pwd: "secret", roles: [  "readWriteAnyDatabase" ]})