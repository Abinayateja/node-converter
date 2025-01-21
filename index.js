const readlineSync = require('readline-sync');

// Fixed conversion rates (you can adjust these)
const INR_TO_USD = 0.012; // 1 INR = 0.012 USD
const USD_TO_INR = 74.80; // 1 USD = 74.80 INR

// Function to convert INR to USD
function convertINRToUSD(amount) {
  return amount * INR_TO_USD;
}

// Function to convert USD to INR
function convertUSDtoINR(amount) {
  return amount * USD_TO_INR;
}

// Main program loop
function startConversion() {
  while (true) {
    console.log("\nCurrency Converter (Type 'exit' to quit)\n");

    // Ask the user which conversion they want to do
    const choice = readlineSync.question(
      'Enter "1" to convert INR to USD, "2" to convert USD to INR, or "exit" to quit: '
    ).trim();

    if (choice.toLowerCase() === 'exit') {
      console.log('Exiting the program.');
      break; // Exit the loop
    }

    let amount;
    
    if (choice === '1') {
      amount = readlineSync.questionFloat('Enter the amount in INR: ');
      const converted = convertINRToUSD(amount);
      console.log(`${amount} INR is equal to ${converted.toFixed(2)} USD.`);
    } else if (choice === '2') {
      amount = readlineSync.questionFloat('Enter the amount in USD: ');
      const converted = convertUSDtoINR(amount);
      console.log(`${amount} USD is equal to ${converted.toFixed(2)} INR.`);
    } else {
      console.log('Invalid choice. Please try again.');
    }
  }
}

// Start the conversion process
startConversion();
