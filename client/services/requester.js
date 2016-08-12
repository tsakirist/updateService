'use strict';

const request = require('request');
const fs = require('fs');

function getVersion() {
    return new Promise((resolve, reject) => {
        request.get('http://localhost:3000/version', (err, res, body) => {
            if(!err && res.statusCode == 200) {
                resolve(body);
            }
            else {
                reject(err);
            }
        });
    });
}

function getName() {
    return new Promise((resolve, reject) => {
        request.get('http://localhost:3000/name', (err, res, body) => {
            if(!err && res.statusCode == 200) {
                resolve(body);
            }
            else {
                reject(err);
            }
        });
    });
}

function getProperties() {
    return new Promise((resolve, reject) => {
        request.get('http://localhost:3000/properties', (err, res, body) => {
            if(!err && res.statusCode == 200) {
                resolve(body);
            }
            else {
                reject(err);
            }
        });
    });
}

function getFile() {
    getName().then((out) => {
        request.get('http://localhost:3000/file')
            .on('error', (err) => {
                console.log(err);
            }).pipe(fs.createWriteStream(out));
    }, (err) => {
        console.log(err);
    });
}

module.exports = {
    getVersion : getVersion,
    getName : getName,
    getProperties : getProperties,
    getFile : getFile
};

// getName().then((out)=> {
//     console.log(out);
// });
// getVersion().then((out) => {
//     console.log(out);
// });
// getProperties().then((out) => {
//     console.log(out);
// });
// getFile();

