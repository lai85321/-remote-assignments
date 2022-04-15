const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const flash = require('connect-flash');
const db = require('./database')

app.use(session({
  secret: 'keyboard cat', 
  resave: true, 
  saveUninitialized: true,
  cookie: { maxAge: 5000 }
}))
app.use(flash());
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine','pug')


//connect
db.connect((err)=>{
    if(err){
        throw err
    }
    console.log('Mysql Connected...')
})

//home-page
const homeRoute = require('./routes/homeRoute')
app.use('/',homeRoute)

//member-page
const memberRoute = require('./routes/memberRoute')
app.use('/member',memberRoute)

//sign Up 
const signUpRoute = require('./routes/signUpRoute')
app.use('/signUp', signUpRoute)

//sign In
const signInRoute = require('./routes/signInRoute')
app.use('/signIn',signInRoute)

app.listen('3000',() => {
    console.log('Sever started on port 3000')
})
