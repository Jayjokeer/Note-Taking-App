const express = require('express')
const router = express.Router()
const path = require('path')
const registerController = require('../controllers/registerController')

router.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','register.html'))
})
router.post('/signup',registerController,(req,res)=>{
    console.log(req.body)
    res.status(200).json({success:true})
})
module.exports = router 