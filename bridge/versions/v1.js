const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const endpoint = 'https://sobio-b76a.sdc.com.ar/v1';

app.use(bodyParser.json());

app.post('/bio/extract-face-image', function(req,resp) {
    axios.post(endpoint+'/bio/extract-face-image', JSON.stringify(req.body), {headers: {'Content-Type': 'application/json'}}).then(response => {
        console.log(response);
        resp.status(response.status);
        resp.send(JSON.stringify(response.data));
    }).catch(err => {
        console.log('ERR', err);
        if(err.response) {
            console.log(err.response.status, err.data);
            resp.status(err.response.status ? err.response.status : 502);
            resp.send('Bridged error: '+(err.response.data ? JSON.parse(err.response.data) : 'Void Response'));
        } else {
            resp.status(502);
            resp.send('Gateway NodeJS Error please see log.');
        }
    });
});

app.post('/bio/extract-face-video', function(req,resp) {
    axios.post(endpoint+'/bio/extract-face-image', JSON.stringify(req.body), {headers: {'Content-Type': 'application/json'}}).then(response => {
        console.log(response);
        resp.status(response.status);
        resp.send(JSON.stringify(response.data));
    }).catch(err => {
        console.log('ERR', err);
        if(err.response) {
            console.log(err.response.status, err.data);
            resp.status(err.response.status ? err.response.status : 502);
            resp.send('Bridged error: '+(err.response.data ? JSON.parse(err.response.data) : 'Void Response'));
        } else {
            resp.status(502);
            resp.send('Gateway NodeJS Error please see log.');
        }
        
    });
});

module.exports = app;