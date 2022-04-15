const express = require("express");
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('home',{message:req.flash('info')})
})

module.exports = router