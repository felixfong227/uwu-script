#!/usr/bin/env node
const readfile = require('./readfile');
const fileName = process.argv[2];
const path = require('path');
const fs = require('fs');

readfile(fileName)
.then(srcFileContent => {
    const chars = [];
    const lines = srcFileContent.split('\n');
    const asciis = lines.map(line => {
        const charLength = line.split(' ');
        return charLength.length
    });
    let code = asciis.map(asciiCode => String.fromCharCode(asciiCode));
    code.pop();
    code = code.join('')
    eval(code)
})
.catch(err => {
    console.error(err);
    return process.exit(1);
});