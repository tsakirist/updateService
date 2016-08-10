'use strict';

const options = {
    host : 'localhost',
    port : 3000,
    method : 'GET'
};
const request = require('./request/request');
let body = '';

request.getVersion(options).then((data) => {
    body = data;
    console.log("Version:",body);
}, (err) => {
    console.log('Error:', err);
});

request.getFile(options).then((data) => {
    console.log('File:', data);
}, (err) => {
    console.log(err);
});
