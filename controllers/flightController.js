const Flight = require('../models/flightShema');
const mongoose = require('mongoose');

module.exports.createFlights = async (req, res)=>{
    try {
        const createFlight = await new Flight(req.body);
        const newflight = await createFlight.save();
        return res.send(newflight);
        
    } catch (error) {
        return res.send("**ERR in create flight***" +error);
    }
}

module.exports.getAllFlights = async (req, res )=>{

    try {
        const getAllFlights =await Flight.find({});
        return res.send(getAllFlights);
    
    } catch (error) {
        return res.send(error);  
    }
    }

// Route to find flights based on source and destination city

module.exports.sourceTODes= async (req, res) => {
   
    const { source, destination } = req.body;
    try {
        const flights = await Flight.find({ source, destination });
        res.json(flights);
      } catch (error) {
        console.error('Error retrieving flights:', error);
        res.status(500).json({ error: 'An error occurred while retrieving flights' });
      }
 
  };