import Payment from '../models/Payment.js';

export const savePayment=async (req,res)=>{
    const {user_id, trip_id, amount,payment_date}=req.body;
    try{
        const payment=new Payment({user_id,trip_id, amount,payment_date});
        await payment.save();
        res.status(201).json(payment);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
export const getPaymentDetails=async (req,res)=>{
    try{
        const payment=await Payment.findById(req.params.id);
        res.status(200).json(payment);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};



