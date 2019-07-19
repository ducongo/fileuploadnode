const request = require('request');
const express = require('express');
const FormData = require('form-data');
const fs = require('fs');

const app = express();
const port = 3000;



app.get('/', (req, res) => {

    let formData = {
        images: [
            fs.createReadStream(__dirname + '/sent/image1.jpg'),
            fs.createReadStream(__dirname + '/sent/image2.jpg'),
            fs.createReadStream(__dirname + '/sent/image3.jpg'),
            fs.createReadStream(__dirname + '/sent/image4.jpg'),
            fs.createReadStream(__dirname + '/sent/image5.jpg'),
            fs.createReadStream(__dirname + '/sent/image6.jpg'),
            fs.createReadStream(__dirname + '/sent/image7.jpg'),
            fs.createReadStream(__dirname + '/sent/image8.jpg')
        ]
    };

    request.post('https://10.54.62.26:8080/', {formData: formData}, (err,httpResponse,body)=>{

    });
    res.send('Sent the files!');
});

//https://10.54.62.26:3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//https://stackabuse.com/the-node-js-request-module/