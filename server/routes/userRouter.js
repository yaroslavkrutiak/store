const express = require('express')
const router = express.Router()

router.get('/auth',(req,res)=>{
    res.status(200).json({message: 'ba-dum-tss'})
})

router.post('/registration',(req,res)=>{

})
router.post('/login',(req,res)=>{

})

module.exports = router