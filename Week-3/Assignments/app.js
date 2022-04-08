const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.use(express.static('public'))
app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.send('Hello, My Server!')
})

const dataRoute = require('./routes/dataRoute')
app.use('/data',dataRoute)

const myNameRoute = require('./routes/myNameRoute')
app.use('/myName',myNameRoute)

const trackNameRoute = require('./routes/trackNameRoute')
app.use('/trackName',trackNameRoute)

// app.get('/myName',(req,res)=>{
//   const name = req.cookies.name
//   if(!name){
//     res.render('myName')
//   }
//   else{
//     res.render('myName',{name:name})
//   }
  
// })

// app.post('/trackName',(req,res)=>{
//   res.cookie('name',req.body.username)
//   res.redirect('/myName')
// })



app.listen(3000, ()=> {
  console.log('listen on port 3000')
})
