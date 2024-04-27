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
        const aggregatedData = [];
        for (const file of files) {
            const data = await readFile(file);
            aggregatedData.push(data);
        }
        return aggregatedData;
    } catch (err) {
        throw err;
    }
}

(async () => {
    try {
        const data = await aggregateData();
        console.log('Aggregated Data:', data);
    } catch (err) {
        console.error('Error:', err);
    }
})();
