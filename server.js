
require("dotenv").config();


const express= require('express');
const port= process.env.PORT || 5000;
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());



const mongoose= require('mongoose');
const uri= process.env.ATLAS_URI;
console.log(uri);
//mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
mongoose.connect('mongodb+srv://Joicy:mean123@cluster0.rl35r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection establised successfully!!!");
});

const exercisesRouter=require('./routes/exercises');
const usersRouter=require('./routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

require('dotenv').config();  

app.listen(port,()=> {
    console.log(`server is running on port :${port}`);
}); 















////////////////////////    Jijo code start    ////////////////////////////////////
const students=[
    {id:1,name:'test',age:1},
    {id:2,name:'john',age:2},
    {id:3,name:'wick',age:3}
]


app.get('/ping',(req,res)=>{
    res.send('Pong');
});

app.get('/student',(req,res)=>{
    res.send(students);
})
app.get('/student/:id',(req,res)=>{
    const id=req.query.id;
    console.log(id)
    let vv;
    students.forEach((val,index)=>{
        if(val.id==id){
            vv=val;
            res.send(vv);
        }else{
           vv="Not found"
        }
    })
    res.send(vv);
})
//////////////////////////////   jijo code end  ///////////////////////////////////////////////

