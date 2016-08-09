'use strict';

const http = require('http');
let body = "";

const options = {
    host : 'localhost',
    port : 3000,
    path : '/checkVersion',
    method : 'GET'
};

http.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        myFun(chunk);
    });
    res.on('end', () => {
        console.log('Request has ended.');
    });
}).end();

function myFun(data) {
    body = data;
    console.log('Last version is', body);
}