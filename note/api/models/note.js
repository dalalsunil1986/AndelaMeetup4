const mongoose=require('mongoose');

const noteSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:{type:String , required:true},
    description:{type:String , required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref: 'User' },
    created_at:{ type: Date,  default: Date.now },
    updated_at:{ type: Date,  default: Date.now }
});

module.exports=mongoose.model('Note',noteSchema);

