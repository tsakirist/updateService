'use strict';

const fs = require('fs');
const config = require('../config/config.json');
const bundlePath = config.bundlePath;

/** Function getLastVersion
 *  returns the last version of the file
 *  @returns {String} name of the file
 */
function getLastVersion() {
    const files = fs.readdirSync(bundlePath);
    return files[files.length-1];
}

/** Function getFile
 *  returns the contents of the last version of the file
 *  @returns {String} contents of the file
 */
function getFile() {
    const version = getLastVersion();
    return fs.readFileSync(bundlePath + `/${version}`, 'utf-8');
}

module.exports = {
    getLastVersion : getLastVersion,
    getFile : getFile,
};