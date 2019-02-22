const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=require('../models/user');
const bcrypt=require('bcrypt-nodejs');
const jwt=require('jsonwebtoken');

router.post('/signup',(req,res,next)=>{

       User.find({email: req.body.email})
       .exec()
       .then(user=>{
           if(user.length>=1){

            res.status(409).json({
                 message:"Mail exists" 
            })
           }else{
               bcrypt.hash(req.body.password,null,null,(err,hash)=>{
                    if(err){
                        res.status(500).json(
                           {
                               error:err
                           } 
                        )
                    }else{
                        const user=new User({
                            _id:new mongoose.Types.ObjectId(),
                            email:req.body.email,
                            password:hash
                       });
                       user.save()
                       .then(result=>{
                            res.status(200).json({
                                 message:'User successfully created',
                                 user:{
                                      _id:result._id,
                                      email:result.email
                                 }
                            })
                       })
                       .catch(err=>{
                           res.status(500).json({
                               message:err
                           })
                       });

                    }
               })
           }
       })
       .catch(err=>{
        res.status(500).json({
            message:err
        })
    });
});

router.post('/login',(req,res,next)=>{

    User.find({email: req.body.email})
    .exec()
    .then(user=>{
         if(user.length<1){
             res.status(401).json({
                 message:"Auth fail"
             })
         }
            bcrypt.compare(req.body.password,user[0].password, (err, result)=>{
               if(err){
                   res.status(401).json({
                        message:"Auth fail"
                   })
               }
               if(result){
                const token=jwt.sign(
                    {
                        email:user[0].email,
                        _id:user[0]._id
                    },
                    process.env.JWT_KEY,
                     {
                         expiresIn:'1h'
                     }
                );
               return res.status(200).json({
                message:'Succesfully login',
                 token:token,
                 user:{
                      userId:user[0]._id,
                      email:user[0].email,

                 }
               });

               }

               return  res.status(401).json({
            message:"Auth fail",
           
        });   
            });
            
      
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        });
    });
});

module.exports=router;

