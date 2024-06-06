import mongoose from 'mongoose';
import express, { json } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();
connectDB();

const app = express();
app.use(json());

//routes importing
import userRoute from './routes/userRoute.js';
import bookingRoute from './routes/bookingRoute.js';
import DestinationRoute from './routes/destinationRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import tripRoute from './routes/tripRoute.js';
import paymentRoute from './routes/paymentRoute.js';
//route use
app.use('/api/user', userRoute);
app.use('/api/booking', bookingRoute);
app.use('/api/destination', DestinationRoute);
app.use('/api/review', reviewRoute);
app.use('/api/trip', tripRoute);
app.use('/api/payment', paymentRoute);

 const PORT=process.env.PORT || 3000;
 app.listen(PORT,()=>{
     console.log(`Server is running at port ${PORT}`);
 });


