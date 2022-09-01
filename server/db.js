import mongoose from "mongoose";
import {MONGO_URI} from './config.js'


export async function ConnectDB() {
    try {
        await mongoose.connect(MONGO_URI)
    } catch (error) {
        console.log(error)   
    }
}