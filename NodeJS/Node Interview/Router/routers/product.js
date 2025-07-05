const productController=require('../controllers/product');
const express=require('express');
const router= express.Router();

router.use('/name',productController.product);  
router.use('/order',productController.orderNumber);  

module.exports=router;