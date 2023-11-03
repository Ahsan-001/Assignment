import * as readline from 'readline';
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let min = 1, max = 100;
let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Guess a number between ${min} and ${max}:`);
rl.on('line', (input) => {
    let guess = Number(input);
    if (isNaN(guess)) {
        console.log('Please enter a valid number.');
    }
    else if (guess < min || guess > max) {
        console.log(`Please enter a number between ${min} and ${max}.`);
    }
    else if (guess < secretNumber) {
        console.log('Too low! Try again:');
    }
    else if (guess > secretNumber) {
        console.log('Too high! Try again:');
    }
    else {
        console.log('Congratulations! You guessed the number!');
        rl.close();
    }
});
