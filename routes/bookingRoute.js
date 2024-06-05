import express from 'express';   
import {createBooking, getBookingDetails} from '../controllers/BookingController.js';
import  auth  from '../middlewares/auth.js';

const router = express.Router();

router.post('/create', createBooking);
router.get('/:id', auth,getBookingDetails);




export default router;