const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Flight-Price',
{ connectTimeoutMS: 30000, bufferCommands: false,})
.then(()=>{console.log('database connection is sucessfull');})
.catch((error)=>{console.log(`${error} not connected `);})