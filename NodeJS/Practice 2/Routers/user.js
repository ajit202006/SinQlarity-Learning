const express=require('express');

const userController=require('../Controllers/user');

const router=express.Router();

// parses '/users/register'  requests
router.use('/register',userController.register);
router.use('/delete/update',userController.update);
router.use('/delete',userController.delete);


module.exports= router;