import mongoose from "mongoose";

const sendSchema= new mongoose.Schema({
    send_id:{
        type: String,
        required: true,
        unique: true
    },
    "user_id":{
        type: String,
        required: true
    },
    "file_name":{
        type: String,
        required: true,
        minLength: 5,
        maxLength:50
    },
    "file_size":{
        type: String,
        required: true
    },
    "date_init_upload":{
        type: Date,
        required: true
    },
    "status":{
        type: String,
        required: true
    },
    "date_finish_uploaded": {
        type: Date
    },
    "s3_url": {
        type: String
    }
})

export default mongoose.model('Send', sendSchema)