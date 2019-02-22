const express=require('express');
const app=express();
const RouteNote=require('./api/routes/notes');
const RouteUser=require('./api/routes/users');
  
const mongoose = require('mongoose');
const morgan=require('morgan');
const bodyParser=require('body-parser');





mongoose.connect('mongodb://localhost/note', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

// app.use((res,req,next)=>{
//     const error=new Error('Not found');
//     res.status= 404; 
//       next(error);  
// });

// app.use((error,req,res,next)=>{
//     res.status(error.status || 500);
//      res.json({
//         error:{
//             message:error.message
//         }
//      });
// });

 
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Header','Origin,X-Requested-With,Content-Type,Accept,Authorization');
       if(req.method==="OPTIONS"){
           res.header('Access-Control-Allow-Methods','PUT,PATCH,POST,GET,DELETE','OPTIONS');

           return res.status(200).json({});
       }

        next();
 });
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());
app.use('/notes',RouteNote);
app.use('/user',RouteUser);
module.exports=app;