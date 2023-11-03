// import * as inquirer from 'inquirer';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import inquirer from 'inquirer';

const rates: { [key: string]: { [key: string]: number } } = {
    USD: { EUR: 0.85, GBP: 0.75 },
    EUR: { USD: 1.18, GBP: 0.88 },
    GBP: { USD: 1.33, EUR: 1.14 }
};


function main() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'amount',
            message: 'Enter the amount of money:',
            validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a number'
        },
        {
            type: 'list',
            name: 'from',
            message: 'Select the currency to convert from:',
            choices: ['USD', 'EUR', 'GBP']
        },
        {
            type: 'list',
            name: 'to',
            message: 'Select the currency to convert to:',
            choices: ['USD', 'EUR', 'GBP']
        }
    ]).then((answers) => {
        const amount = parseFloat(answers.amount);
        const from = answers.from;
        const to = answers.to;
        const convertedAmount = convert(amount, from, to);
        console.log(`${amount} ${from} is approximately ${convertedAmount.toFixed(2)} ${to}.`);
    });
}

function convert(amount: number, from: string, to: string): number {
    if (from === to) {
        return amount;
    }
    const rate = rates[from][to];
    return amount * rate;
}

main();
