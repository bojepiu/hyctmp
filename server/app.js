import express from 'express'
import routerMain from './routes/index.js'
import {ConnectDB} from './db.js'

ConnectDB()
const app=express()
app.use(express.json())
app.use((err, req, res, next) => {
    console.log(err)
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error(err);
        return res.status(400).send({ status: 400, message: err.message });
    }
    next();
});
app.use(routerMain)

export default app;