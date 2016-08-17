'use strict';

const fs = require('fs');
const cp = require('child_process');
const requester = require('./requester');
const Promise = require('bluebird');
const execFile = Promise.promisify(cp.execFile);
const fork  = cp.fork;
let proc;

function getOptions() {
    return JSON.parse(fs.readFileSync('config/file.json'));
}

function checkAndUpdate() {
    const opt = getOptions();
    return new Promise((resolve, reject) => {
        checkVersion(opt.version).then((out) => {
            console.log(`Versions match? ${out.match}`);
            if(!out.match) {
                getFile().then((name) => {
                    processFile(name, out.version, opt.path).then((out) => {
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

function checkVersion(version) {
    console.log('Curr version:', version);
    return new Promise((resolve, reject) => {
        requester.getVersion().then((out) => {
            console.log('Server version:', out);
            resolve({version: out, match: out==version});
        }, (err) => {
            console.log(err);
            reject(err);
        });
    })
}

function updateVersion(version) {
    const opt = getOptions();
    opt.version = version;
    fs.writeFileSync('config/file.json', JSON.stringify(opt, null, 2));
    console.log('Updated version', version);
}

function  getFile() {
    return requester.getFile();
}

function processFile(fileName, version, filePath) {
    if (proc) {
        console.log('Killing process..');
        proc.kill();
    }
    return execFile('tar', ['xvf', fileName, '-C', 'dummy/'])
        .then(() => {
            console.log('Tar.gz extracted successfully.');
            return execFile('npm', ['install', '--save', '--prefix', filePath]);
        })
        .then(() => {
            console.log('Installed dependencies.');
            return execFile('rm', ['-rf', fileName, filePath + 'etc']);
        })
        .then((stdout) => {
            console.log('Tar.gz file removed.', stdout);
            updateVersion(version);
            const js = filePath + fileName.slice(0, fileName.lastIndexOf('_'));
            proc = fork(js);
            return version;
        })
        .catch(err => {
            console.log('Inside filehandler', err);
        })
}

module.exports = {
    checkAndUpdate,
    checkVersion,
    updateVersion,
    getFile,
    getOptions
};