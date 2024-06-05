import express from 'express';   
import {savePayment,getPaymentDetails} from '../controllers/PaymentController.js';
import  auth  from '../middlewares/auth.js';


const router = express.Router();

router.post('/create', savePayment);
router.get('/:id', auth,getPaymentDetails);



export default router;