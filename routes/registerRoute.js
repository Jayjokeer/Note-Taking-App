const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','register.html'))
})

module.exports = router