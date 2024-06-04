import express from 'express';   
import {createReview,updateReview,getReviewForDestination} from '../controllers/userController.js';
import { auth } from '../middlewares/authMiddleware.js';
import {router} from 'express.Router';

router.post('/create', createReview);
router.get('/:id', auth,getReviewForDestination);
router.put('/update/:id', updateReview);


export default router;