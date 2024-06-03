const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

//routes importing
// const userRoute = require('./routes/userRoute');
// const bookingRoute = require('./routes/bookingRoute');
// const DestinationRoute = require('./routes/DestinationRoute');
// const reviewRoute = require('./routes/reviewRoute');

// route use
// app.use('/api/user', userRoute);
// app.use('/api/booking', bookingRoute);
// app.use('/api/destination', DestinationRoute);
// app.use('/api/review', reviewRoute);

 const PORT=process.env.PORT || 3000;
 app.listen(PORT,()=>{
     console.log(`Server is running at port ${PORT}`);
 });


