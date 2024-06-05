import express from 'express';   
import { createTrip,getTripDetails,getAllTrips,updateTrip,deleteTrip} from '../controllers/TripController.js';
import  auth  from '../middlewares/auth.js';

const router = express.Router();

router.post('/create', createTrip);
router.get('/:id', auth,getTripDetails);
router.get('/', getAllTrips);
router.put('/update/:id', updateTrip);
router.delete('/delete/:id', deleteTrip);

export default router;