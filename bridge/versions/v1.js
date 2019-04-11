const axios = require('axios');
const express = require('express');
const app = express();
const endpoint = 'https://sobio-b76a.sdc.com.ar/v1';

app.post('/bio/extract-face-image', function(req,resp) {
    console.log(req.body);
    axios.post(endpoint+'/bio/extract-face-image', req.body).then(response => {
        console.log(response);
        res.status(response.status);
        resp.send(JSON.parse(response.data));
    }).catch(err => {
        console.log(err);
        res.status();
        res.send(err);
    });
});

app.post('/bio/extract-face-video', function(req,resp) {
    axios.post(endpoint+'/bio/extract-face-image', req.body).then(response => {
        console.log(response);
        res.status(response.status);
        resp.send(JSON.parse(response.data));
    }).catch(err => {
        console.log(err.response);
        res.status(err.response.status);
        res.send(error.response.data);
    });
});

module.exports = app;