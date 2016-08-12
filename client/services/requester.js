'use strict';

const request = require('request');
const fs = require('fs');
const server = require('../config/http.json').server;

function getVersion() {
    const url = server + '/version';
    return new Promise((resolve, reject) => {
        request.get(url, (err, res, body) => {
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
    const url = server + '/name';
    return new Promise((resolve, reject) => {
        request.get(url, (err, res, body) => {
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
    const url = server + '/properties';
    return new Promise((resolve, reject) => {
        request.get(url, (err, res, body) => {
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
    const url = server + '/file';
    getName().then((out) => {
        request.get(url)
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

getName().then((out)=> {
    console.log(out);
});
getVersion().then((out) => {
    console.log(out);
});
getProperties().then((out) => {
    console.log(out);
});
// getFile();

