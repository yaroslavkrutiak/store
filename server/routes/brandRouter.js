const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({message: 'ba-dum-tss'})
})

router.post('/',(req,res)=>{

})
router.get('/:id',(req,res)=>{

})

module.exports = router