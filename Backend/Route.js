const express = require('express')
const router = express.Router()

const {app} = require('./controller')


router.get('/node',app)

router.get('/express',(req,res)=>{
    res.send('express')
})

module.exports= router