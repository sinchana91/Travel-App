const mongoose=require('mongoose');

const tripSchema=new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    destination_id:{type:mongoose.Schema.Types.ObjectId,ref:'Destination',required:true},
    start_date:{type:Date,required:true},
    end_date:{type:Date,required:true},
    bookings:[{type:mongoose.Schema.Types.ObjectId,ref:'Booking'}]
});

const Trip=mongoose.model('Trip',tripSchema);
module.exports=Trip;