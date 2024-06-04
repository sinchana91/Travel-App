import express from 'express';   
import {createDestination,getDestinationDetails,getAllDestinations} from '../controllers/userController.js';
import { auth } from '../middlewares/authMiddleware.js';
import {router} from 'express.Router';

router.post('/create', createDestination);
router.get('/:id', auth,getDestinationDetails);
router.get('/', auth,getAllDestinations);



export default router;