const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Flight-Price',{useNewUrlParser :true, useUnifiedTopology : true, bufferTimeoutMS: 15000,})
.then(()=>{console.log('database connection is sucessfull');})
.catch((error)=>{console.log(`${error} not connected `);})