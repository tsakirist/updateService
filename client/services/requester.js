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
    return new Promise((resolve, reject) => {
        getName().then((out) => {
            request.get(url).on('error', (err) => {
                    reject(err);
                }).pipe(fs.createWriteStream(out)).on('finish', () => {
                    resolve(out);
                });
        }, (err) => {
            reject(err);
        });
    })
}

module.exports = {
    getVersion,
    getName,
    getProperties,
    getFile
};