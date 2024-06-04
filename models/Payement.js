const mongoose=require('mongoose');

const payementSchema=new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    trip_id:{type:mongoose.Schema.Types.ObjectId,ref:'Trip',required:true},
    amount:{type:Number,required:true},
    payment_date:{type:Date,required:true}
});

const Payement=mongoose.model('Payement',payementSchema);
module.exports=Payement;
