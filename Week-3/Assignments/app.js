const express = require('express')
const app = express()

app.set('view engine','pug')




app.get('/',(req,res)=>{
    res.send('Hello, My Server!')
})

const dataRoute = require('./routes/dataRoute')
app.use('/data',dataRoute)

app.listen(3000, ()=> {
  console.log('listen on port 3000')
})
