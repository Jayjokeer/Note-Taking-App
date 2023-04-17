const express = require('express')
const router = express.Router()
const path = require('path')
const loginController = require('../controllers/loginController')

router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','login.html'))
})

router.post('/login',loginController,(req,res)=>{
    const user = req.user
    res.status(200).json({success:true,user:user})
    console.log(user)
})


module.exports = router