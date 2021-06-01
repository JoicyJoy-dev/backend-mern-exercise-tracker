
require("dotenv").config();


const express= require('express');
const port= process.env.PORT || 5000;
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());



// const mongoose= require('mongoose');
// const uri= process.env.ATLAS_URI;
// console.log(uri);
// //mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
// mongoose.connect('mongodb+srv://Joicy:mean123@cluster0.rl35r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
// {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});

// const connection=mongoose.connection;
// connection.once('open',()=>{
//     console.log("MongoDB database connection establised successfully!!!");
// });

// const exercisesRouter=require('./routes/exercises');
// const usersRouter=require('./routes/users');

// app.use('/exercises',exercisesRouter);
// app.use('/users',usersRouter);

app.get('/ping',(req,res)=>{
    res.send('Pong');
});


app.listen(port,()=> {
    console.log(`server is running on port :${port}`);
}); 
