const userDb = require('../models/userDb')
const bcrypt = require('bcrypt')
const path = require('path')

const loginController= async(req,res,next)=>{
    const {password,email} = req.body
    if(!password || !email) res.send('please input your email and password')
    
    try{
        //check if user exists
        const foundUser = await userDb.findOne({email})
        if(!foundUser) res.status(404).send('user not found');
        const pwdPass = await bcrypt.compare(password,foundUser.password)
        if(!pwdPass){res.status(403).send('email or password is not correct')} 
        else{
            req.user = foundUser.email
            next()
        }

    }catch(err){
        res.send(err)
    }
}

module.exports = loginController