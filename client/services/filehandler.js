'use strict';

const fs = require('fs');
const path = require('path');
const config = require('../config/file.json');

function checkVersion(filePath, currentVersion, serverVersion) {
    console.log('Inside filehandler..');
    console.log('Filepath:', filePath);
    console.log('Current version:', currentVersion);
    console.log('Server version:', serverVersion);
    // if(currentVersion != serverVersion) {
    //     return false;
    // }
    updateVersion(serverVersion);
    return true;
}

//TODO need to update http.json with new version , and also write contents of new file untar execute..

function updateVersion(version) {
    console.log('Updating http.json version to', version);
    config.version = version;
    fs.writeFileSync('config/config2.json', JSON.stringify(config, null, 2));
}

module.exports = {
    checkVersion : checkVersion
};