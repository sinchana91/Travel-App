const Booking = require('../models/Booking');

const createBooking = async (req, res) => {
    const { trip_id, type,details,cost } = req.body;
    try {
        const booking = new Booking({ trip_id,  type,details,cost  });
        await booking.save();
        res.status(201).json(booking);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}