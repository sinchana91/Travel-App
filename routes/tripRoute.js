import express from 'express';   
import { createTrip,getTripDetails,getAllTrips,updateTrip,deleteTrip} from '../controllers/userController.js';
import { auth } from '../middlewares/authMiddleware.js';
import {router} from 'express.Router';

router.post('/create', createTrip);
router.get('/:id', auth,getTripDetails);
router.get('/', getAllTrips);
router.put('/update/:id', updateTrip);
router.delete('/delete/:id', deleteTrip);

export default router;