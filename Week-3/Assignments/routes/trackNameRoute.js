const express = require('express')
const router = express.Router()

router.post('/',(req,res)=>{
    res.cookie('name',req.body.username)
    res.redirect('/myName')
})

module.exports = router