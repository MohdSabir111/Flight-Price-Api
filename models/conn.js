const mongoose = require('mongoose');
const db ='mongodb+srv://MohdSabir111:coder%40111@flight.8zaqexj.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db,{
    useNewUrlParser : true,
     useUnifiedTopology : true,
    })
.then(()=>{console.log('database connection is sucessfull');})
.catch((error)=>{console.log(`${error} not connected `);})