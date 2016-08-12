'use strict';

const fs = require('fs');
const cp = require('child_process');
const execFile = cp.execFile;
const fork  = cp.fork;
const spawn = cp.spawn;
const requester = require('./requester');
const fileOpts = require('../config/file.json');
const filePath = fileOpts.filePath;
const currentVersion = fileOpts.version;
let proc;

function checkAndUpdate() {
    return new Promise((resolve, reject) => {
        checkVersion().then((out) => {
            console.log(`^Versions match? ${out.match}`);
            if(!out.match) {
                getFile().then((name) => {
                    processFile(name, out.version).then((out) => {
                        resolve(out);
                    }, (err) => {
                        reject(err);
                    });
                }, (err) => {
                    reject(err);
                })
            }
        }, (err) => {
            reject(err);
        })
    });
}

function checkVersion() {
    console.log('Curr version:', currentVersion);
    return new Promise((resolve, reject) => {
        requester.getVersion().then((out) => {
            console.log('Server version:', out);
            resolve({version: out, match: out==currentVersion});
        }, (err) => {
            console.log(err);
            reject(err);
        });
    })
}

function updateVersion(version) {
    fileOpts.version = version;
    fs.writeFileSync('config/file2.json', JSON.stringify(fileOpts, null, 2));
    console.log('Updated version', version);
}

function  getFile() {
    return requester.getFile();
}

function processFile(fileName, version) {
    return new Promise((resolve, reject) => {
        execFile('tar', ['xvf', fileName, '-C', 'dummy/'], (err) => {
            if(err) {
                reject(err);
            }
            else {
                console.log('File extracted successfully.');
                execFile('npm', ['install', '--save', '--prefix', filePath], (err) => {
                    if(err) {
                        reject(err);
                    }
                    else {
                        console.log('Installed dependencies..');
                        execFile('rm', ['-rf', fileName, filePath + 'etc'], (err, stdout) => {
                            if(err) {
                                reject(err);
                            }
                            else {
                                console.log('Tar.gz file removed.', stdout);
                                updateVersion(version);
                                const js = filePath + fileName.slice(0, fileName.lastIndexOf('_'));
                                proc = fork(js);
                                const timer = setInterval(() => {
                                    console.log('Killing...');
                                    proc.kill();
                                    clearInterval(timer);
                                }, 3000);
                            }
                        })
                    }
                })
            }
        });
    });
}

module.exports = {
    checkAndUpdate: checkAndUpdate,
    checkVersion: checkVersion,
    updateVersion: updateVersion,
    getFile: getFile,

};