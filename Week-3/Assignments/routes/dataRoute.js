const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const {number} = req.query
    let message = ""
    if(! number){
    message = "Lack of Parameter"
    }
    else{
        if (Number.isInteger(+number)===false || (+number<1)){
            message = "Wrong Parameter"
        }
        else{
            let total =0
            for(let i=0;i<=number;i++){
                total += i 
            }
            message = total.toString()
        }
    }
    res.render('index', {message:message})
})

module.exports = router
