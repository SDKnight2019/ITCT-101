// Node.js script to convert pounds to kilograms

const readline = require('readline');

// Set up interface to read from stdin
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input
rl.question('Enter weight in pounds: ', (input) => {
    const pounds = parseFloat(input);

    if (isNaN(pounds)) {
        console.log('Please enter a valid number!');
    } else {
        const kilograms = pounds * 0.45359237;
        console.log(`${pounds} pounds is equal to ${kilograms.toFixed(2)} kilograms.`);
    }

    rl.close();
});
