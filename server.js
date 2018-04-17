//Bring express into the project
    //This is saying 'got to the node module and find something called express'
    //Whatever express exports, that is what we are importing by using require
const express = require('express');

//This will be an instance of express
const app = express();
//This is a location
const PORT = 5000;

app.listen(PORT);