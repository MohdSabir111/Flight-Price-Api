const Flight = require('../models/flightShema');
const mongoose = require('mongoose');

module.exports.createFlights = async (req, res)=>{
    try {
        const createFlight = await Flight.create(req.body);
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
        const flights = await Flight.find({ source, destination },{ _id: 0, flight: 1, price: 1 });
        res.json(flights);
      } catch (error) {
        console.error('Error retrieving flights:', error);
        res.status(500).json({ error: 'An error occurred while retrieving flights' });
      }
 
  };

  module.exports.UpdateFlight= async(req, res)=>{
    try {
        const _id =req.params.id;                                    
        const updateFlight = await Flight.findByIdAndUpdate({_id :_id } , req.body,{ 
            new :true  // to show updated record in one hit
        } )
        return res.send(updateFlight);
    } catch (error) {
        return res.send(error)  
    }
};
