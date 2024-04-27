const fs = require('fs').promises;
const path = require('path');

const folderPath = './data';

async function readFile(filename) {
    try {
        const data = await fs.readFile(path.join(folderPath, filename), 'utf8');
        return data;
    } catch (err) {
        throw err;
    }
}

async function aggregateData() {
    try {
        const files = await fs.readdir(folderPath);
        const fileDataPromises = files.map(file => readFile(file));
        const aggregatedData = await Promise.all(fileDataPromises);
        return aggregatedData;
    } catch (err) {
        throw err;
    }
}

aggregateData()
    .then(data => {
        console.log('Aggregated Data:', data);
    })
    .catch(err => {
        console.error('Error:', err);
    });
