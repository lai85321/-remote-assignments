const express = require("express")
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../database')

router.post('/',async (req,res)=>{
    try{
        const {email, password} = req.body
        if(email && password){
            const passwordHash = await bcrypt.hash(password, 10)
            let user = {email: email, password: passwordHash}
            //check email
            let sql = `SELECT * FROM user WHERE email = '${email}'`
            db.query(sql,(err,result)=>{
                if (err) throw err
                if(result.length!=0){
                    req.flash('info','The email address have been used!')
                    res.redirect('/')
                }
                else{
                    sql = 'INSERT INTO user SET ?'
                    let query = db.query(sql, user, (err, result)=>{
                        if (err) throw err
                        const username = encodeURIComponent(email.split('@')[0]);
                        res.redirect('/member?valid=' + username);
                    })
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