
import { signUp,login,getUser,getUserByName,updateUser,getAllUsers} from '../controllers/userController.js';
import { auth } from '../middlewares/authMiddleware.js';
import {router} from 'express.Router';

router.post('/signup', signUp);
router.post('/login', login);
router.get('/:id', auth,getUser);
router.get('/:name', getUserByName);
router.put('/update/:id', updateUser);
router.get('/', getAllUsers);

export default router;