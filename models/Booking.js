const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    trip_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
    type: { type: String, enum:['flight','hotel','activity'],required: true },
    details: { type: String, required: true },
    cost: { type: Number, required: true,validate:{
        validator:(v)=>v>0,
        message:'Cost should be a positive number'
    } },
    booking_date: { type: Date, default: Date.now },
    status:{type:String,enum:['pending','confirmed','cancelled'],default:'pending'}
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;