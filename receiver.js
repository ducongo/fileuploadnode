const request = require('request');
const express = require('express');
const FormData = require('form-data');
const fs = require('fs');

const app = express();
const port = 8080;

app.get('/', (req, res) => {

    res.send('Receiver ready!')
});



app.post('/', function (req, res) {
    console.log("Received files");
    console.log(req.body.FormData);
    res.send('POST request to the receiver')
});


//10.54.62.26:8080
app.listen(port, () => console.log(`Receiver app listening on port ${port}!`))