import express from 'express';   
import {createBooking, getBookingDetails} from '../controllers/userController.js';
import { auth } from '../middlewares/authMiddleware.js';
import {router} from 'express.Router';

router.post('/create', createBooking);
router.get('/:id', auth,getBookingDetails);




export default router;