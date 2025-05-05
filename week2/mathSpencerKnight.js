// mathSpencerKnight.js

const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter two valid numbers.");
  process.exit(1);
}

switch (operation) {
  case 'add':
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case 'subtract':
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case 'multiply':
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case 'divide':
    if (num2 === 0) {
      console.log("Cannot divide by zero.");
    } else {
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    break;
  case 'exponent':
    console.log(`${num1} ^ ${num2} = ${num1 ** num2}`);
    break;
  default:
    console.log("Invalid operation. Use: add, subtract, multiply, divide, or exponent.");
}
