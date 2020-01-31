const express = require('express');
//import express from express;

//
const app = express();
//console.log(process.env.USERNAME);


//route Handlers
app.get('/', (req, res) => {
 res.send({hi: "there"});
});



//
const PORT = process.env.PORT || 5000;
app.listen(PORT);
