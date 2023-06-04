const express = require('express');
const router = express.Router();
const Controller =require('../controllers/flightController');

// inserting or creating a new record 
router.post("/flight",Controller.createFlights);

 




 //getting alll the records
router.get("/flightall",Controller.getAllFlights);



router.get("/flight",Controller.sourceTODes);




module.exports = router;