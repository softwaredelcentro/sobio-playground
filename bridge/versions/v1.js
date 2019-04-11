const axios = require('axios');
const express = require('express');
const app = express();
const endpoint = 'https://sobio-b76a.sdc.com.ar/v1';

app.post('/bio/extract-face-image', function(req,resp) {
    console.log(req.body);
    axios.post(endpoint+'/bio/extract-face-image', JSON.stringify(req.body), {headers: {'Content-Type': 'application/json'}}).then(response => {
        console.log(response);
        resp.status(response.status);
        resp.send(JSON.parse(response.data));
    }).catch(err => {
        console.log('ERR', err.response.status, err, err.data);
        if(err.response) {
            resp.status(err.response.status ? err.response.status : 502);
            resp.send(err.response.data ? err.response.data : '');
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
        resp.send(JSON.parse(response.data));
    }).catch(err => {
        console.log('ERR', err.response.status, err, err.data);
        if(err.response) {
            resp.status(err.response.status ? err.response.status : 502);
            resp.send(err.response.data ? err.response.data : '');
        } else {
            resp.status(502);
            resp.send('Gateway NodeJS Error please see log.');
        }
        
    });
});

module.exports = app;