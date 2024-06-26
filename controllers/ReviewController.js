import Review from '../models/Review.js';

export const createReview=async (req,res)=>{
    const { user_id,destination_id, rating, review}=req.body;
    try{
        const r=new Review({ user_id,destination_id, rating, review});
        await r.save();
        res.status(201).json(r);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

//update the review
export const updateReview=async (req,res)=>{
    try{
        const review=await Review.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(review);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

//get review for destinations
export const getReviewForDestination=async (req,res)=>{
    try{
        const reviews=await Review.find({destination_id:req.params.id});
        res.status(200).json(reviews);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

