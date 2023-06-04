const express = require('express');
const app = express();
const Port = process.env.Port || 8000;
require('./models/conn');
const Flight = require('./models/flightShema');
const flightRouter = require('./routers/flightRouter')


app.use(express.json())
app.use(flightRouter);

app.get('/',(req, res)=>{
    res.send('<h1>hello from server</h1>');
})


app.listen(Port,(req,res)=>{
    console.log(`server is running on port ${Port}`);
});
