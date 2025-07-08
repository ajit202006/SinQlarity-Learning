import  express from 'express';
import { registerUser,updateUser } from '../controllers/user';
const router=express.Router();


router.use('/add',registerUser);
router.use('/update',updateUser);

export default router;