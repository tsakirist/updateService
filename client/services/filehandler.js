'use strict';

const fs = require('fs');
const path = require('path');
const fileOptions = require('../config/file.json');

/** Function checkVersion
 *  compares the versions of the file
 *  @param serverVersion
 *  @returns {boolean}
 */
function checkVersion(serverVersion) {
    console.log('Inside filehandler..');
    console.log('Current version:', fileOptions.version);
    console.log('Server version:', serverVersion);
    if(fileOptions.version != serverVersion) {
        updateVersion(serverVersion);
        return false;
    }
    return true;
}

//TODO need to update http.json with new version , and also write contents of new file untar execute..

/** Function updateVersion
 *  updates the config/file.json with the newer version of the file
 *  @param version
 */
function updateVersion(version) {
    console.log('Updating file.json version to', version);
    fileOptions.version = version;
    fs.writeFileSync('config/config2.json', JSON.stringify(fileOptions, null, 2));
}

module.exports = {
    checkVersion : checkVersion
};