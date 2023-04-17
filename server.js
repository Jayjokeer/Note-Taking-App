require('dotenv').config() 
const express = require('express')
const port = process.env.PORT || 9000
const app = express()
const path = require('path')
require('./config/db')
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//routes
app.use('/',require('./routes/indexRoute'))
app.use('/',require('./routes/loginRoute'))
app.use('/',require('./routes/registerRoute'))


//api
app.post('/getnotes',(req,res)=>{
    const {user} = req.body
})


app.post('/addnotes',(req,res)=>{
    console.log(req.body)
})
app.post('/deletenote',(req,res)=>{

})
app.listen(port,()=>{
    console.log(`app running on http://localhost:${port}`)
})

