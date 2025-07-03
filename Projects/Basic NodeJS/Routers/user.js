const express=require('express');// importing express module
const userController=require('../Controllers/user');// importing the 
const router = express.Router();// making a router 

// sending a post request of /register route to register function of the controller
router.post('/register',userController.register);

// sending a post request of /get route to get function of the controller
router.post('/get',userController.get);

// sending a post request of /update route to update function of the controller
router.post('/update',userController.update);

// sending a post request of /delete route to delete function of the controller
router.post('/delete',userController.delete);

// Exporting router to fetch in other file
module.exports = router;