const Review=require('../models/Review');

const createReview=async (req,res)=>{
    const { trip_id, rating, review}=req.body;
    try{
        const review=new Review({user_id:req.user_id,trip_id, rating, review});
        await review.save();
        res.status(201).json(review);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}

//update the review
const updateReview=async (req,res)=>{
    try{
        const review=await Review.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(review);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}

module.exports={createReview,updateReview};