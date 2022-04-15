const express = require("express")
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../database')
const { compare } = require("bcrypt")

router.post('/',(req,res)=>{
    try{
        const {email, password} =req.body
        if (email && password){
            sql = `SELECT * FROM user WHERE email= '${email}'`
            let query = db.query(sql,async (err,result)=>{
                console.log(result)
                if (err) throw err
                if(result.length!=0){
                    const match = await bcrypt.compare(password, result[0].password);
                    if (match){
                        console.log('Login Seccessfully')
                        const username = encodeURIComponent(email.split('@')[0]);
                        res.redirect('/member?valid=' + username);
                    }
                    else{
                        req.flash('info','Wrong password! Please check again')
                        res.redirect('/')
                    }
                }
                else{
                    req.flash('info','Invalid email! You are not registered, please sign-up')
                    res.redirect('/')
                }  
            })
        }
        else{
            let message ='Please make sure each field has valid  data: '
            if(!email)message+='email '
            if(!password)message+='password'
            req.flash('info',message)
            res.redirect('/')
        }
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router