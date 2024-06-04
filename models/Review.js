const mongoose=require('mongoose');

const ReviewSchema=new mongoose.Schema({    
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    destination_id:{type:mongoose.Schema.Types.ObjectId,ref:'Destination',required:true},
    review:{type:String},
    rating:{type:Number,required:true}
});

const Review=mongoose.model('Review',ReviewSchema);
module.exports=Review;