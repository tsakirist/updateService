'use strict';

const fs = require('fs');
const config = require('../config/config.json');
const bundlePath = config.bundlePath;

/** Function getLastVersion
 *  returns the last version of the file
 *  @returns {{name: string, version: string}}
 */
function getLastVersion() {
    const files = fs.readdirSync(bundlePath);
    return {name: files[files.length-1], version: files[files.length-1].split('_')[1].slice(0, -4)};
}

/** Function getFile
 *  returns the contents of the last version of the file
 *  @returns {String} contents of the file
 */
function getFile() {
    const name = getLastVersion().name;
    return fs.readFileSync(bundlePath + `/${name}`, 'utf-8');
}

module.exports = {
    getLastVersion : getLastVersion,
    getFile : getFile,
};