const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const name = req.cookies.name
    if(!name){
      res.render('myName')
    }
    else{
      res.render('myName',{name:name})
    }
    
})

module.exports = router