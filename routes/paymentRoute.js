import express from 'express';   
import {savePayment,getPaymentDetails} from '../controllers/userController.js';
import { auth } from '../middlewares/authMiddleware.js';
import {router} from 'express.Router';

router.post('/create', savePayment);
router.get('/:id', auth,getPaymentDetails);



export default router;