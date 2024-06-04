const Review=require('../models/Review');

const createReview=async (req,res)=>{
    const { trip_id, rating, review}=req.body;
    try{
        const r=new Review({user_id:req.user_id,trip_id, rating, review});
        await r.save();
        res.status(201).json(r);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

//update the review
const updateReview=async (req,res)=>{
    try{
        const review=await Review.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(review);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

//get review for destinations
const getReviewForDestination=async (req,res)=>{
    try{
        const reviews=await Review.find({destination_id:req.params.id});
        res.status(200).json(reviews);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

module.exports={createReview,updateReview,getReviewForDestination};