
const router = require('express').Router()

var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
//importing middleware
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureGuest ,(req, res) => {
    res.render('login')
  })

router.get("/log",ensureAuth, async(req,res)=>{
    res.render('index',{userinfo:req.user})
})
module.exports=router;
