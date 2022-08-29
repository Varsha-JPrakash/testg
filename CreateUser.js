const express=require('express')
const router=express.Router()
const contactModel=require('./UserModel')
router.post('/create',(req,res)=>{
    const data=req.body
    const user1=new contactModel({
        fname:data.fname,
        email:data.email,
        password:data.password,
        phone:data.phone
    })
    user1.save().then((result)=>res.send({msg:'created admin'})).catch((e)=>console.log(e))
})
module.exports=router