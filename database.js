const express=require('express');
const mysql = require('mysql2')
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(bodyparser.json())


const pool=mysql.createConnection({
    host:"localhost",
    database:"board kanaban",
    user:"root",
    password:"jaiGanesh@3",
    connectionLimit:10
})
pool.connect((err)=>{
if(err) throw err;
else{
    console.log("db connected");
}
})

// app.get('/api',(req,res)=>{
//     res.send('Api Working');
// });

app.post('/boards',(req,res)=>{
    console.log(req.body);
    let sql=`INSERT INTO persons(title) values('${req.body.title}')`;
    pool.query(sql,(err,result)=>{
     if(err) throw err;
     res.send("created kanban board item project");
     
    });
})
app.get('/boards/read',(req,res)=>{
    let sql="select * from persons";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
        
       });

});

app.put('/boards/:id',(req,res)=>{
    console.log(req.params.id);
    let sql=`UPDATE persons SET stage='${req.body.stage}' 
    where id='${req.body.id}' `;
    pool.query(sql,(err,result)=>{
        if(err) 
        return res.status(400).json({status: 400});
        res.send("kanban Updated");
        
       });
    

})
    
    app.listen(3000, function() {
        console.log("Server started on port 3000");
      });