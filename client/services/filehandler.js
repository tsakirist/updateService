'use strict';

const fs = require('fs');
const path = require('path');

function checkVersion(filePath, currentVersion, serverVersion) {
    console.log('Inside filehandler..');
    console.log('Filepath:', filePath);
    console.log('Current version:', currentVersion);
    console.log('Server version:', serverVersion);
    if(currentVersion != serverVersion) {
        return false;
    }
    return true;
}

//TODO need to update config.json with new version , and also write contents of new file untar execute..

module.exports = {
    checkVersion : checkVersion
};