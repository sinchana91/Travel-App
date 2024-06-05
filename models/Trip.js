import { Schema, model } from 'mongoose';

const tripSchema=new Schema({
    user_id:{type:Schema.Types.ObjectId,ref:'User',required:true},
    destination_id:{type:Schema.Types.ObjectId,ref:'Destination',required:true},
    start_date:{type:Date,required:true},
    end_date:{type:Date,required:true},
    bookings:[{type:Schema.Types.ObjectId,ref:'Booking'}]
});

const Trip=model('Trip',tripSchema);
export default Trip;