'use strict';

const fs = require('fs');
const config = require('../config/config.json');
const bundlePath = config.bundlePath;

//TODO check if having a config.json with version, name fields is better than this method
function getLastProperties() {
    const files = fs.readdirSync(bundlePath);
    return {name: files[files.length-1], version: files[files.length-1].split('_')[1].slice(0, -7)};
}

function getFilePath() {
    return bundlePath + getLastProperties().name;
}

module.exports = {
    getLastProperties : getLastProperties,
    getFilePath : getFilePath
};