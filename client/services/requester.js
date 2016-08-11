'use strict';

const request = require('request');
const fs = require('fs');

function getVersion() {

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

getFile();
