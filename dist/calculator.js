"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
function subtract(numbers) {
    return numbers.reduce((result, num) => result - num);
}
function multiply(numbers) {
    return numbers.reduce((result, num) => result * num, 1);
}
function divide(numbers) {
    if (numbers.includes(0)) {
        throw new Error('Division by zero is not allowed.');
    }
    return numbers.reduce((result, num) => result / num);
}
function startCalculator() {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    function getUserInput() {
        rl.question('Enter an operation (+, -, *, /) or type "exit" to quit: ', (operator) => {
            if (operator.toLowerCase() === 'exit') {
                rl.close();
                console.log('Calculator exited.');
            }
            else if (['+', '-', '*', '/'].includes(operator)) {
                rl.question('Enter numbers separated by spaces: ', (numbersInput) => {
                    const numbers = numbersInput.split(' ').map(parseFloat);
                    if (numbers.some(isNaN)) {
                        console.log('Invalid input. Please enter valid numbers separated by spaces.');
                        getUserInput();
                    }
                    else {
                        try {
                            let result = 0;
                            switch (operator) {
                                case '+':
                                    result = add(numbers);
                                    break;
                                case '-':
                                    result = subtract(numbers);
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
                        }
                        catch (error) {
                            console.log(error.message);
                            getUserInput();
                        }
                    }
                });
            }
            else {
                console.log('Invalid operator. Please enter a valid operator (+, -, *, /) or type "exit" to quit.');
                getUserInput();
            }
        });
    }
    console.log('Simple Calculator');
    getUserInput();
}
startCalculator();
//# sourceMappingURL=calculator.js.map