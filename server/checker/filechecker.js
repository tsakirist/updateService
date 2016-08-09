'use strict';

const fs = require('fs');
const config = require('../config/config.json');
const bundlePath = config.bundlePath;

module.exports = {

    getLastVersion : () => {
        const files = fs.readdirSync(bundlePath);
        return files[files.length-1];
    },
    sendLastVersion : () => {
        //TODO figure out what to do to send file
    }

};