import Log from '../models/Log.js'

export async function NewEventLog(req,res){
    try {
        if(!req.body.num_oto || !req.body.user_name || !req.body.action || !req.body.user_id){
            return res.send({'error':'Parameters required not provided'})
        }
        var user_id = req.body.user_id
        var num_oto = req.body.num_oto
        var user_name= req.body.user_name
        var action = req.body.action
        var saveLog=await new Log({num_oto,date:new Date(),user_name,action,user_id})
        saveLog.save()
        return res.send({message:'registered'})
    } catch (error) {
        return res.send({error:error.message||error})
    }
}

export async function GetLogId(req,res){
    try {
        console.log(req.params)
        var logs=await Log.find({num_oto:req.params.numOto})
        return res.send(logs)
    } catch (error) {
        return res.send({error:error.message})        
    }
}

export async function GetLogDate(req,res){
    try {
        var init=req.query.init
        var end=req.query.end
        if(!init || !end){
            res.send({error:'Query parameters not specified init=yyyy-mm-dd end=yyyy-mm-dd'})
        }
        var initDate=new Date(init)
        var endDate=new Date(end)
        if(req.query.numOto)
        var query={"date":{"$gte":initDate.setHours(0,0,0),"$lte":endDate.setHours(23,59,59)},'num_oto':req.query.numOto}
        else
        var query={"date":{"$gte":initDate.setHours(0,0,0),"$lte":endDate.setHours(23,59,59)}}
        var result=await Log.find(query) 
        return res.send(result)
    } catch (error) {
        return res.send({error:error.message||error.message}) 
    }
}

//db.createUser({user: "admindb" , pwd: "secret", roles: [  "readWriteAnyDatabase" ]})