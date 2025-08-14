// calculator.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let history = [];

function showMenu() {
  console.log("\n=== CALCULATOR ===");
  console.log("1. Add");
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");
  console.log("5. View history");
  console.log("6. Exit");
  rl.question("Choose an option: ", handleOption);
}

function handleOption(option) {
  switch (option) {
    case "1": askNumbers("add"); break;
    case "2": askNumbers("subtract"); break;
    case "3": askNumbers("multiply"); break;
    case "4": askNumbers("divide"); break;
    case "5": showHistory(); break;
    case "6":
      console.log("Exiting... Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid option.");
      showMenu();
  }
}

function askNumbers(operation) {
  rl.question("Enter the first number: ", num1 => {
    rl.question("Enter the second number: ", num2 => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      let result;

      switch (operation) {
        case "add": result = num1 + num2; break;
        case "subtract": result = num1 - num2; break;
        case "multiply": result = num1 * num2; break;
        case "divide":
          if (num2 === 0) {
            console.log("Error: division by zero.");
            showMenu();
            return;
          }
          result = num1 / num2;
          break;
      }

      const record = `${num1} ${operation} ${num2} = ${result}`;
      history.push(record);
      console.log("Result:", result);
      showMenu();
    });
  });
}

function showHistory() {
  if (history.length === 0) {
    console.log("No operations in history.");
  } else {
    console.log("\n=== History ===");
    history.forEach((op, i) => console.log(`${i + 1}. ${op}`));
  }
  showMenu();
}

// Start program
showMenu();
