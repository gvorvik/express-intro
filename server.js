//Bring express into the project
//This is saying 'got to the node module and find something called express'
//Whatever express exports, that is what we are importing by using require
const express = require('express');

//This will be an instance of express
const app = express();
//This is a location
const PORT = 5000;

//a get request for local host (req = request, res = response)
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/hey', (req, res) => {
    res.send('Howdy');
});

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`);
});