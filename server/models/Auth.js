import mongoose from 'mongoose'

const CreateUserModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    shortName: {
        type: String,
        required: true,
    },
    email: { 
        type: String,
        required: true
    },
    password: {
        type: String,
        select:false
    },
    pathSftp: {
        type: String,
        required: true
        },
    numOto: {
        type: String,
        required: true
    },
    publicKey: {
        type: String,
        required: true
    },
    privateKey: {
        type: String,
        required: true,
    },
    passPhrase:{
        type: String,
        required: true,
        select: false
    },
    mfaCode: { 
        type: String,
        required: true
    }, 
    validated:{
        type: Boolean,
        required: true
    },
    enabled:{
        type: Boolean,
        required: true
    },
    dateCreated:{
        type:Date,
        required:true
    } 
})

export default mongoose.model('CreateUserModel',CreateUserModel)