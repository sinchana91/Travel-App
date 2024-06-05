import express from 'express';   
import {createReview,updateReview,getReviewForDestination} from '../controllers/ReviewController.js';
import  auth  from '../middlewares/auth.js';

const router = express.Router();

router.post('/create', createReview);
router.get('/:id', auth,getReviewForDestination);
router.put('/update/:id', updateReview);


export default router;