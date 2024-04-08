const fs = require('fs');
const path = require('path');

module.exports = async function (context, req) {
    try {
        // Get the path to the cars.json file in the same directory
        const filePath = path.resolve(__dirname, 'cars.json');
        
        // Read the contents of the file synchronously
        const data = fs.readFileSync(filePath, 'utf8');
        
        // Parse the JSON data
        const carsData = JSON.parse(data);
        
        // Return the contents of the cars.json file
        context.res = {
            status: 200,
            body: carsData
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: error.message
        };
    }
};
