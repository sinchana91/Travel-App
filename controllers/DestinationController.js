import Destination from '../models/Destination.js';

export const createDestination=async (req,res)=>{
    const { name, location, description}=req.body;
    try{
        const destination=new Destination({name, location, description});
        await destination.save();
        res.status(201).json(destination);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}

//get destination details
export const getDestinationDetails=async (req,res)=>{
    try{
        const destination=await Destination.findById(req.params.id);
        res.status(200).json(destination);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

//get all the destinations
export const getAllDestinations=async (req,res)=>{
    try{
        const destinations=await find();
        res.status(200).json(destinations);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}


