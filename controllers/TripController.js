const Trip=require('../models/Trip');

const createTrip=async (req,res)=>{
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

const getTripDetails=async (req,res)=>{
    try{
        const trip=await Trip.findById(req.params.id).populate('bookings');
        res.status(200).json(trip);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

const getAllTrips=async (req,res)=>{
    try{
        const trips=await Trip.find();
        res.status(200).json(trips);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

module.exports={createTrip,getTripDetails,getAllTrips};