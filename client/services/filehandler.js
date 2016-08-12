'use strict';

const execFile = require('child_process').execFile;













// 'use strict';
//
// const execFile = require('child_process').execFile;
// const fs = require('fs');
// const path = require('path');
// const fileOptions = require('../config/file.json');
//
// /** Function checkVersion
//  *  compares the versions of the file
//  *  @param serverVersion
//  *  @returns {boolean}
//  */
// function checkVersion(serverVersion) {
//     console.log('Inside filehandler..');
//     console.log('Current version:', fileOptions.version);
//     console.log('Server version:', serverVersion);
//     if(fileOptions.version != serverVersion) {
//         // updateVersion(serverVersion);
//         return false;
//     }
//     return true;
// }
//
// function writeFile(name , data) {
//     console.log(name);
//     fs.writeFileSync(name, data);
// }
//
// //TODO need to update http.json with new version , and also write contents of new file untar execute..
//
// /** Function updateVersion
//  *  updates the config/file.json with the newer version of the file
//  *  @param version
//  */
// function updateVersion(version) {
//     console.log('Updating file.json version to', version);
//     fileOptions.version = version;
//     fs.writeFileSync('config/config2.json', JSON.stringify(fileOptions, null, 2));
// }
//
// function processFile(fileName) {
//     execFile('tar', ['xvf', `${fileName}`, '-C', 'dummy/'], (err) => {
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log('File extracted successfully.');
//             execFile('npm', ['install', '--save', '--prefix', 'dummy/'], (err) => {
//                 if(err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log('Installed dependencies..');
//                     execFile('rm', ['-rf', `${fileName}`], (err, stdout) => {
//                         if(err) console.log(err);
//                         else console.log('Tar.gz file removed.', stdout);
//                     })
//                 }
//             })
//         }
//     });
// }
//
// module.exports = {
//     checkVersion : checkVersion,
//     processFile : processFile,
//     writeFile : writeFile
// };