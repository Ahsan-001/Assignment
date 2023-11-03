import * as readline from 'readline';

interface User {
    id: string;
    pin: string;
}

// Generate random user data
const users: User[] = Array.from({ length: 10 }, () => ({
    id: Math.random().toString(36).substring(2, 15),
    pin: Math.random().toString(36).substring(2, 15)
}));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your user id: ', (userId) => {
    rl.question('Enter your pin: ', (userPin) => {
        const user = users.find(user => user.id === userId && user.pin === userPin);
        if (user) {
            console.log('Access granted. ATM functionalities are now unlocked.');
            // Add ATM functionalities here
        } else {
            console.log('Access denied. Incorrect user id or pin.');
        }
        rl.close();
    });
});
