// Get the arguments from the command line
const args = process.argv.slice(2);

// Check if exactly two arguments are provided
if (args.length !== 2) {
  console.error("Usage: node add.js <num1> <num2>");
  process.exit(1);
}

// Convert arguments to numbers
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Validate input
if (isNaN(num1) || isNaN(num2)) {
  console.error("Both arguments must be valid numbers.");
  process.exit(1);
}

// Calculate and display the sum
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
