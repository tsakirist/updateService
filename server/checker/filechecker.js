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
    return {name: files[files.length-1], version: files[files.length-1].split('_')[1].slice(0, -7)};
}

/**
 *  Function getFile
 *  returns the contents of the last version of the file
 * @returns {{name: *, data}}
 */
function getFile() {
    const name = getLastVersion().name;
    return {name: name, data: fs.readFileSync(bundlePath + `/${name}`)};

}

module.exports = {
    getLastVersion : getLastVersion,
    getFile : getFile,
};

// const data = getFile().data;
// const data = fs.readFileSync(bundlePath + '/test_v5.1.tar.gz');
// const name = 'asd.tar.gz';
// console.log(data);
// const temp = data.toJSON(data);
// var json = JSON.stringify(data);
// // console.log(data.toJSON(data)); // convert buffer to json
// // console.log(json);
// // console.log(JSON.parse(temp));
// // console.log(json);
// // console.log(JSON.parse(json).data);
// const buf = new Buffer(JSON.parse(json).data);
// console.log(buf);
// fs.writeFileSync(name, data);

