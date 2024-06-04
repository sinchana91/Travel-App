import mongoose from 'mongoose';
import express, { json } from 'express';
import { config } from 'dotenv';
config();

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
app.use('/user', userRoute);
app.use('/booking', bookingRoute);
app.use('/destination', DestinationRoute);
app.use('/review', reviewRoute);
app.use('/trip', tripRoute);
app.use('/payment', paymentRoute);

 const PORT=process.env.PORT || 3000;
 app.listen(PORT,()=>{
     console.log(`Server is running at port ${PORT}`);
 });


