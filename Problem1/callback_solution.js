const fs = require('fs');
const path = require('path');

const folderPath = './data';

function readFile(filename, callback) {
    fs.readFile(path.join(folderPath, filename), 'utf8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data);
    });
}

function aggregateData(callback) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            callback(err);
            return;
        }

        let aggregatedData = [];
        let count = 0;

        files.forEach(file => {
            readFile(file, (err, data) => {
                if (err) {
                    callback(err);
                    return;
                }
                aggregatedData.push(data);
                count++;
                if (count === files.length) {
                    callback(null, aggregatedData);
                }
            });
        });
    });
}

aggregateData((err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Aggregated Data:', data);
});
