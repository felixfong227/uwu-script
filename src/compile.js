#!/usr/bin/env node
const readfile = require('./readfile');
const fileName = process.argv[2];
const path = require('path');
const fs = require('fs');

readfile(fileName)
.then(srcFileContent => {
    if(srcFileContent) {
        const allChars = srcFileContent.split('');
        const allAsciiCode = allChars.map(char => char.charCodeAt(0));
        let uwuScript = allAsciiCode.map(len => `${Array(len).fill('UwU').join(' ')}\n`);
        uwuScript = uwuScript.join('')
        const newFileName = path.basename(fileName, '.js')
        const newFilePath = path.resolve(process.cwd() + '/' + newFileName);

        fs.writeFileSync(
            newFilePath + '.uwu',
            uwuScript
        );
    }
})
.catch(err => {
    console.error(err);
    return process.exit(1);
});
