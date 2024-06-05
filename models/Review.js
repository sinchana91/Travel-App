import { Schema, model } from 'mongoose';

const ReviewSchema=new Schema({    
    user_id:{type:Schema.Types.ObjectId,ref:'User',required:true},
    destination_id:{type:Schema.Types.ObjectId,ref:'Destination',required:true},
    review:{type:String},
    rating:{type:Number,required:true}
});

const Review=model('Review',ReviewSchema);
export default Review;