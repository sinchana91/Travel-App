import Payment, { findById } from '../models/Payment';

const savePayment=async (req,res)=>{
    const { trip_id, amount,payment_date}=req.body;
    try{
        const payment=new Payment({user_id:req.user_id,trip_id, amount,payment_date});
        await payment.save();
        res.statues(201).json(payment);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

const getPaymentDetails=async (req,res)=>{
    try{
        const payment=await findById(req.params.id);
        res.status(200).json(payment);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export default{savePayment,getPaymentDetails};

