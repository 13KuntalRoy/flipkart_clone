import express from 'express'
import dotenv  from 'dotenv'
import Connection  from './database/db.js'
import Defaultdata from './default.js'
const app=express()
dotenv.config()
const PORT=process.env.PORT || 5000
const username=process.env.USER_NAME
const password=process.env.PASSWORD
Connection(username,password)
app.listen(PORT,()=> console.log(`server running on ${PORT}`))
Defaultdata();