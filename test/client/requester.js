const expect = require('chai').expect;
const requester = require('../../client/services/requester');

// Mocha has built-in support for promises , so we can omit done() callback with a return

describe('Client Requester Functions', () => {

    describe('getVersion()', () => {

        const prom = requester.getVersion();

        it('should return promise', (done) => {
            expect(prom).to.be.a('promise');
            done();
        });

        it('resolved promise should contain a string {version (vX.X)}', () => {
           return prom.then((out) => {
                expect(out).to.be.a('string');
                expect(out).to.have.length.within(4,6);
            });
        })
    });

    describe('getName()', () => {

        const prom = requester.getName();

        it('should return promise', (done) => {
            expect(prom).to.be.a('promise');
            done();
        });

        it('resolved promise should be string', () => {
            return prom.then((out) => {
                expect(out).to.be.a('string');
            })
        })
    });

    describe('getProperties()', () => {
        
        const prom = requester.getProperties();

        it('should return promise', (done) => {
            expect(prom).to.be.a('promise');
            done();
        });

        it('resolved promise should contain json with 2 fields {name, version}', () => {
            return prom.then((out) => {
                expect(JSON.parse(out)).to.have.all.keys("name", "version");
            })
        })
    });

    describe('getFile()', () => {

        const prom = requester.getFile();

        it('should return promise', (done) => {
            expect(prom).to.be.a('promise');
            done();
        });

        it('resolved promise should contain a string with filename', () => {
            return prom.then((out) => {
                expect(out).to.be.a('string');
            })
        });

        after(() => {
            const exec = require('child_process').exec;
            exec('rm *.gz', (err) => {
                if(err) console.log(err);
            });
        })
    });

});