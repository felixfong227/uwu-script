module.exports = fileName => {
    
    return new Promise((resolve, reject) => {
        
        if(!fileName) return reject('empty argument fileName');
        
        const fs = require('fs');
        const path = require('path');

        const filePath = path.resolve(process.cwd() + '/' + fileName);

        const srcFileContent = fs.readFileSync(filePath, 'utf8');
        
        return resolve(srcFileContent)
    
    });

};