const fetch = require('node-fetch');

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        throw err;
    }
}

(async () => {
    try {
        const data = await fetchData();
        console.log('Fetched Data:', data);
    } catch (err) {
        console.error('Error:', err);
    }
})();
