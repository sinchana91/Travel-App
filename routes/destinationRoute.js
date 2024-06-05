import express from 'express';   
import {createDestination,getDestinationDetails,getAllDestinations} from '../controllers/DestinationController.js';
import auth  from '../middlewares/auth.js';


const router = express.Router();


router.post('/create', createDestination);
router.get('/:id', auth,getDestinationDetails);
router.get('/', auth,getAllDestinations);



export default router;