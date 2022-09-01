import dotenv from 'dotenv'
dotenv.config()

export const ENV = process.env.ENV
export const HOST= process.env.HOST
export const PORT = process.env.PORT
export const MONGO_URI=`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`


