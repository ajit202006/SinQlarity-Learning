const express=require('express');// Importing express module

const calculatorController=require('../Controller/Calculator');
const router=express.Router();// creating a router using Router() function

router.post('/add',calculatorController.add);
router.post('/subtract',calculatorController.subtract);
router.post('/multiply',calculatorController.multiply);
router.post('/divide',calculatorController.divide);
module.exports = router;// making the router importable to app.js