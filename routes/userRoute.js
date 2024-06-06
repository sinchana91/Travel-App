
import { signUp,login,getUser,getUserByName,updateUser,getAllUsers} from '../controllers/UserController.js';
import  auth  from '../middlewares/auth.js';
import express from 'express';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/user/:id', auth,getUser);
router.get('/username/:name', getUserByName);
router.put('/update/:id', updateUser);
router.get('/', getAllUsers);

export default router;