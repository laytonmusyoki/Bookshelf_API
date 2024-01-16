const express=require('express')
const router=express.Router()
const db=require('../models/db_configuration')
  

router.get('/',(req,res)=>{
    const sql="SELECT * FROM books";
    db.query(sql,(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})

router.post('/add_book',(req,res)=>{
    const name=req.body.name
    const author=req.body.author
    const year=req.body.year
    const book ={name,author,year}
    const sql="INSERT INTO books SET ?";
    db.query(sql,book,(err)=>{
        if(err)throw err;
        res.send("Book inserted successfully")
    })
})

router.get('/book_by_id/:id',(req,res)=>{
    const book_id=req.params.id
    const sql="SELECT * FROM books WHERE id=?";
    db.query(sql,book_id,(err,data)=>{
        if(err)throw err;
        if(data<1){
            res.send("No book with that id")
        }
        res.send(data)
    })
})


router.post('/update_book/:id',(req,res)=>{
    const book_id=req.params.id
    const name=req.body.name
    const author=req.body.author
    const year=req.body.year
    const book ={name,author,year}
    let sql=`UPDATE books SET name='${name}',author='${author}',year='${year}' WHERE id =?`;
    db.query(sql,book_id,(err)=>{
        if(err)throw err;
        res.send("Book updated successfully")
    })
})

router.patch('/update_book_partially/:id',(req,res)=>{
    const book_id=req.params.id
    const name=req.body.name
    const author=req.body.author
    const year=req.body.year
    const book ={name,author,year}
    let sql=`UPDATE books SET name='${name}',author='${author}',year='${year}' WHERE id =?`;
    db.query(sql,book_id,(err)=>{
        if(err)throw err;
        res.send("Book updated successfully")
    })
})

router.delete('/book/:id',(req,res)=>{
    const book_id=req.params.id
    let sql="DELETE FROM books WHERE id=?";
    db.query(sql,book_id,(err)=>{
        if(err)throw err;
        res.send('Book deleted successfully')
    })
})


module.exports=router