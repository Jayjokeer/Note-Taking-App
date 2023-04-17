const userDb = require('../models/userDb')
const bcrypt = require('bcrypt')

const registerUser = async(req,res,next)=>{
    const {email, password}= req.body
    if(!email || !password) res.send('please input email and password');

    //check if user is exists
    const userExists = await userDb.findOne({email})
    if(userExists) res.send('user exists in the database');

    //hashing the password
    const hashedPwd = await bcrypt.hash(password,10)
        //save user to the database
    try{
        const user = new userDb()
        user.email = email
        user.password= hashedPwd
        const savedUser = await user.save()
        next()
    }catch(err){
        res.send(err)
    }
   
}

module.exports = registerUser