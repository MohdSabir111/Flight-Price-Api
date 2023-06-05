const express = require('express');
const router = express.Router();
const Controller =require('../controllers/flightController');

// inserting or creating a new record 
router.post("/flight",Controller.createFlights);

 //getting alll the records
router.get("/flightall",Controller.getAllFlights);

 //displaying only flights and priced based on source to destination 
router.get("/flight",Controller.sourceTODes);

// updating the flights by id
  
router.patch("/flight/:id",Controller.UpdateFlight);




module.exports = router;