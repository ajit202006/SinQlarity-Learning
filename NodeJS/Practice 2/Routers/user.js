const express=require('express');

const userController=require('../Controllers/user');

const router=express.Router();

// parses '/users/register'  requests
router.use('/register',userController.register);

// parses '/users/get'  requests
router.use('/get',userController.get);

// parses '/users/update'  requests
router.use('/update',userController.update);

// parses '/users/delete'  requests
router.use('/delete',userController.delete);


module.exports= router;