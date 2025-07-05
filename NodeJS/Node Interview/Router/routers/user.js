const express=require('express');
const userController=require('../controllers/user');
const router = express.Router();

// /user/name 
router.use('/name',userController.name);
router.use('/mobile',userController.mobile);

module.exports=router;