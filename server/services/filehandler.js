'use strict';

const fs = require('fs');
const config = require('../config/config.json');
const bundlePath = config.bundlePath;

function getLastProperties() {
    const files = fs.readdirSync(bundlePath);
    return {name: files[files.length=1], version: files[files.length-1].split('_')[1].slice(0, -7)};
}

function getFilePath() {
    return bundlePath + getLastProperties().name;
}

module.exports = {
    getLastProperties : getLastProperties,
    getFilePath : getFilePath
};



// 'use strict';
//
// const fs = require('fs');
// const config = require('../config/config.json');
// const bundlePath = config.bundlePath;
//
// /** Function getLastVersion
//  *  returns the last version of the file
//  *  @returns {{name: string, version: string}}
//  */
// function getLastVersion() {
//     const files = fs.readdirSync(bundlePath);
//     return {name: files[files.length-1], version: files[files.length-1].split('_')[1].slice(0, -7)};
// }
//
// /**
//  *  Function getFile
//  *  returns the contents of the last version of the file
//  * @returns {{name: *, data}}
//  */
// function getFile() {
//     const name = getLastVersion().name;
//     return {name: name, data: fs.readFileSync(bundlePath + `/${name}`)};
//
// }
//
// module.exports = {
//     getLastVersion : getLastVersion,
//     getFile : getFile,
// };
