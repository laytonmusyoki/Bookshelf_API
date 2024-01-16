const express=require('express');
const app=express();
const bodyperser=require('body-parser');
const bookRouter=require('./routes/books');

app.use('/',bookRouter)


app.use(bodyperser.json())


app.use(express.urlencoded({extended:true}))



app.listen(4000,()=>{
    console.log('app running on port 4000');
})



