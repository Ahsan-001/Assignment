import readline from 'readline';

// Function to perform addition
function add(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to perform subtraction
function subtract(numbers: number[]): number {
  return numbers.reduce((result, num) => result - num);
}

// Function to perform multiplication
function multiply(numbers: number[]): number {
  return numbers.reduce((result, num) => result * num, 1);
}

// Function to perform division
function divide(numbers: number[]): number {
  if (numbers.includes(0)) {
    throw new Error('Division by zero is not allowed.');
  }
  return numbers.reduce((result, num) => result / num);
}

// Function to start the calculator
function startCalculator() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function getUserInput() {
    rl.question('Enter an operation (+, -, *, /) or type "exit" to quit: ', (operator) => {
      if (operator.toLowerCase() === 'exit') {
        rl.close();
        console.log('Calculator exited.');
      } else if (['+', '-', '*', '/'].includes(operator)) {
        rl.question('Enter numbers separated by spaces: ', (numbersInput) => {
          const numbers = numbersInput.split(' ').map(parseFloat);

          if (numbers.some(isNaN)) {
            console.log('Invalid input. Please enter valid numbers separated by spaces.');
            getUserInput();
          } else {
            try {
              let result: number = 0;
              switch (operator) {
                case '+':
                  result = add(numbers);
                  break;
                case '-':
                  result = subtract(numbers) ;
                  break;
                case '*':
                  result = multiply(numbers);
                  break;
                case '/':
                  result = divide(numbers);
                  break;
              }
              console.log(`Result: ${result}`);
              getUserInput();
            } catch (error) {
              console.log((error as Error).message);
              getUserInput();
            }
          }
        });
      } else {
        console.log('Invalid operator. Please enter a valid operator (+, -, *, /) or type "exit" to quit.');
        getUserInput();
      }
    });
  }

  console.log('Simple Calculator');
  getUserInput();
}   

// Start the calculator
startCalculator();