'use strict';

const options = require('./config/config.json');
const request = require('./request/request');
let body = '';

request.getVersion(options).then((data) => {
    body = data;
    console.log("Version:",body);
}, (err) => {
    console.log('Error:', err);
});

request.getFile(options).then((data) => {
    console.log('File:', body);
    console.log(data);
}, (err) => {
    console.log(err);
});
