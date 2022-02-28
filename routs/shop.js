const express=require('express')
const router=express.Router();

router.use('/product',(req,res,next)=>{
    res.send('<h1>hello sanskar</h1>')
})
module.exports=router;