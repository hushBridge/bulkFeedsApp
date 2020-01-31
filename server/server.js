const express = require('express');
//import express from express;

//
const app = express();
const port = process.env.PORT || 5000;


//route Handlers
app.get('/', (req, res) => {
res.send({hi: "there"});
});



//
app.listen(port);
