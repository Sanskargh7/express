const express=require('express')
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({extended:false}))
const adminrouts=require('./routs/admin.js')
const shoprouts=require('./routs/shop.js')
app.use(adminrouts);
app.use(shoprouts);

app.use((req,res,next)=>{
    res.status(404).send('page not found')
})

app.listen(3000,()=>{
    console.log('port is working ')
})