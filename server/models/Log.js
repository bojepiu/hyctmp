import mongoose from 'mongoose'

export const LogSchema = new mongoose.Schema({
    "user_id":{
        type: String,
        required: true
    },
    "num_oto":{
        type: String,
        required: true
    },
    "user_name":{
        type: String,
        required: true
    },
    "action":{
        type: String,
        required: true
    },
    "date":{
        type: Date,
        required: true
    }
})
