import { Schema, model } from 'mongoose';

const payementSchema=new Schema({
    user_id:{type:Schema.Types.ObjectId,ref:'User',required:true},
    trip_id:{type:Schema.Types.ObjectId,ref:'Trip',required:true},
    amount:{type:Number,required:true},
    payment_date:{type:Date,required:true}
});

const Payement=model('Payement',payementSchema);
export default Payement;
