const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    trip_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
    type: { type: String, enum:['flight','hotel','activity'],required: true },
    details: { type: String, required: true },
    cost: { type: Number, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);
exports.Booking = Booking;