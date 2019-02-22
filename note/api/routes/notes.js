const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Note = require('../models/note.js');
const checkAuth=require('../middlewares/check-auth');

// 1. route post for creating the notes
router.post('/',(req, res, next) => {
 
   
   const note = new Note({
      _id: new mongoose.Types.ObjectId,
      title: req.body.title,
      description: req.body.description,
      created_at: Date.now(),
      updated_at: Date.now()
   });
   note.save().then(result => {
      res.status(200).json({
         message: 'Successfully created',
         createdNote: {
            _id: result._id,
            title: result.title,
            description: result.description,
            created_at: result.created_at,
            updated_at: result.updated_at
         }
      })
   })
      .catch(err => {
         res.status(500).json({
            error: err
         });
      });

});

// 2. get route for geting all notes by most recent one
router.get('/', (req, res, next) => {
   Note.find().sort({created_at: -1})
      .select(' _id title description created_at updated_at')
      .exec()
      .then(docs => {
         const responce = {
            count: docs.length,
            Product: docs.map(doc => {
               return {
                  _id: doc._id,
                  title: doc.title,
                  description: doc.description,
                  created_at: doc.created_at,
                  updated_at: doc.updated_at,
                  request: {
                     url: 'http://localhost:3000/notes/' + doc._id
                  }
               }
            })

         }
         res.status(200).json(responce);
      })
      .catch(err => {
         res.status(500).json({
            error: err
         })
      });
});

   // 3. route get an existing note by id
    router.get('/:NoteId',(req,res,next)=>{
     const id=req.params.NoteId;
       Note.findById(id)
       .exec()
       .then(doc=>{
           if(doc){
              res.status(200).json(doc)
           }else{
            res.status(404).json({
                message:'No valid entry for the given ID'
            })
         }
       })
       .catch(err=>{
         res.status(500).json({
              error:err
         });
       });
       
    });

     //4.update a specific note by id
     router.patch('/:NoteId',(req,res,next)=>{
          const id=req.params.NoteId;
           const updatedata={};
             
           for(const data of req.body){
               updatedata[data.propName]=data.value;
           }
           Note.update({_id:id},{$set:updatedata})
           .exec()
           .then(result=>{
                res.status(200).json({
                  message:'Succesfully updated',
                });
           })
           .catch(err=>{
               res.status(500).json({
                  error:err
               })
           });
     });
      
       // 5. delete id from  
     router.delete('/:NoteId',(req,res,next)=>{
      const id=req.params.NoteId;
       Note.remove({_id:id})
       .exec()
       .then(result=>{
         res.status(200).json({
             message:"Successfully deleted"
         })
     })
       .catch(err=>{
         res.status(500).json({
            error:err
         })
     }); 
     });



module.exports = router;
