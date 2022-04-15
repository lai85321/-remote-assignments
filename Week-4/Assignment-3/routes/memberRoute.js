const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('member',{username:req.query.valid})
})

module.exports = router