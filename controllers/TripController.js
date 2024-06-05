import Trip from '../models/Trip.js';

export const createTrip=async (req,res)=>{
    const { destination_id, start_date, end_date, bookings}=req.body;
    try{
        const trip=new Trip({user_id:req.user_id,destination_id, start_date, end_date, bookings});
        await trip.save();
        res.status(201).json(trip);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}

export const getTripDetails=async (req,res)=>{
    try{
        const trip=await findById(req.params.id).populate('bookings');
        res.status(200).json(trip);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

export const getAllTrips=async (req,res)=>{
    try{
        const trips=await find();
        res.status(200).json(trips);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

//update trip details
export const updateTrip=async (req,res)=>{
    try{
        const trip=await findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(trip);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

//delete the trip
export const deleteTrip=async (req,res)=>{
    try{
        await findByIdAndDelete(req.params.id);
        res.status(200).json({message:'Trip deleted successfully'});
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

