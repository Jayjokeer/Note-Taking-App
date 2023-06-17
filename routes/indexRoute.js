const express = require('express')
const router = express.Router()
const path = require('path')
const noteDb = require('../models/noteDb')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"..",'views','index.html'))
})

router.post('/addnote',async(req,res)=>{
    const {title,email,desc} = req.body
    const addedNote = new noteDb({
        title:title,
        email:email,
        desc:desc
    })
    const newNote  = await addedNote.save()
    res.status(200).json({success:true,note:addedNote})
    console.log(addedNote)
})

router.post('/getallnotes',async(req,res)=>{
    const allNotes = await noteDb.find({email:req.body.email})
    res.status(200).json({success:true,allNotes})
    console.log(allNotes)
})



module.exports = router