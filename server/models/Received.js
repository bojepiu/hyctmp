import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
    received_id: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: String,
        required: true
    },
    file_name: {
        type: String,
        required: true
    },
    file_size: {
        type: String,
        required: true
    },
    upload_url: {
        type: String,
        required: true
    },
    date_uploaded: {
        type: String,
        required: true
    },
    date_downloaded: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    }
})