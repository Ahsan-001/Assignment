//? Start
//exercise 01
// I have installed Node.js, TypeScript and VS Code on my computer.
//-----------------------------------
//exercise 02
const personeName1 = "Ahsan";
console.log(`Hello ${personeName1}, would you like to learn some AI today?`);
//-----------------------------------
//exercise 03
const personeName = "Ahsan";
console.log(personeName.toLowerCase());
console.log(personeName.toUpperCase());
console.log(personeName.toLocaleLowerCase());
//-----------------------------------
//exercise 04
const author = "Albert Einstein";
const quote = "A person who never made a mistake never tried anything new.";
console.log(`${author} once said, "${quote}"`);
//-----------------------------------
//exercise 05
const famousPerson = "Albert Einstein";
const message = `${famousPerson} once said, "A person who never made a mistake never tried anything new."`;
console.log(message);
//-----------------------------------
//exercise 06
const pname = "\t  Ahsan Saeed \n";
console.log(pname);
console.log(pname.trim());
//-----------------------------------
//exercise 07
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//exercise 08
console.log("________________________________________________");
console.log("________________________________________________");
console.log(`console.log("5+3")`);
console.log("________________________________________________");
console.log("________________________________________________");
//-----------------------------------
//exercise 09 npm init -y
const favoriteNumber = 1;
console.log(`My favorite number is ${favoriteNumber}.`);
//-----------------------------------
//exercise 10
const comment = 'Ahsan';
console.log(`Hello, ${comment}!`);
//-----------------------------------
//exercise 11
const names1 = ['Ahmed', 'Jawad', 'Hafiz', 'Zain'];
for (let i = 0; i < names1.length; i++) {
    console.log(names1[i]);
}
// for...of
// for (const namess of names1) {
//   console.log(namess);
// }
//for each
// names1.forEach(fname => {console.log(fname);
// });
//-----------------------------------
//exercise 12
const names = ['John', 'Jane', 'Smith', 'Alice'];
for (const name of names) {
    console.log(`Hello, ${name}!`);
}
//-----------------------------------
//exercise 13
const transportation = ['car', 'motorcycle', 'bicycle'];
for (let i = 0; i < transportation.length; i++) {
    const element = transportation[i];
    console.log(`I want to buy a ${element}`);
}
// for (const item of transportation) {
//   console.log(`I would like to own a ${item}.`);
// }
//-----------------------------------
//exercise 14
const guestList2 = ['John', 'Jane', 'Smith'];
for (const guest of guestList2) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}
// for (let index = 0; index < guestList2.length; index++) {
//     // const element = guestList2[index];
//     console.log(`Dear ${guestList2[index]}, you are invited to dinner. Please join us!`);
// }
//-----------------------------------
// exercise 15
const guestList1 = ['John', 'Jane', 'Bob'];
const guestCannotMakeIt = 'Jane';
const newGuest = 'Alice';
const index = guestList1.indexOf(guestCannotMakeIt);
if (index !== -1) {
    guestList1[index] = newGuest;
}
for (const guest of guestList1) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}
const guestlist = ['ahsan', 'hafiz', 'jawad'];
const cannotcome = 'hafiz';
const newguest = 'ganja';
const list = guestlist.indexOf(cannotcome);
if (list != -1) {
    guestlist[list] = newguest;
}
for (let index = 0; index < guestlist.length; index++) {
    const element = guestlist[index];
    console.log(`Dear ${element}, you are invited to dinner. Please join us!`);
}
//-----------------------------------
// exercise 16
const guestListt = ['John', 'Jane', 'Bob'];
console.log('We found a bigger dinner table!');
guestListt.unshift('Alice');
guestListt.splice(3, 0, "Galileo Galilei");
guestListt.push('Lily');
for (const guest of guestListt) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}
//-----------------------------------
//exercise 17
const guestList = ['John', 'Jane', 'Bob', 'Alice', 'Mike', 'Lily'];
console.log('Sorry, the new dinner table won\'t arrive in time.');
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are still invited to dinner. Please join us!`);
}
guestList.length = 0; // Empty the list
console.log(guestList); // Print the empty list
//-----------------------------------
//exercise 18
const placesToVisit = ['Paris', 'Tokyo', 'New York', 'Rome', 'Sydney'];
console.log('Original order:');
console.log(placesToVisit);
console.log('Alphabetical order:');
console.log(placesToVisit.slice().sort());
console.log('Original order:');
console.log(placesToVisit);
console.log('Reverse alphabetical order:');
console.log(placesToVisit.slice().sort().reverse());
console.log('Original order:');
console.log(placesToVisit);
placesToVisit.reverse(); // Reverse the order of the list
console.log('Reversed order:');
console.log(placesToVisit);
placesToVisit.reverse(); // Reverse the order again to get back the original order
console.log('Original order:');
console.log(placesToVisit);
placesToVisit.sort(); // Sort the list in alphabetical order
console.log('Alphabetical order:');
console.log(placesToVisit);
placesToVisit.sort().reverse(); // Sort the list in reverse alphabetical order
console.log('Reverse alphabetical order:');
console.log(placesToVisit);
//-----------------------------------
//exercise 19
const guests = ['Ahmed', 'Hashim', 'Nabeel'];
console.log(`You are inviting ${guests.length} people to dinner.`);
//-----------------------------------
//exercise 20
const favoriteThings = ["mountains", "rivers", "languages"];
const favoriteObject = {
    mountains: "The beauty of nature",
    rivers: "The serenity of flowing water",
    languages: "The richness of human communication"
};
for (const thing of favoriteThings) {
    console.log(`I love ${thing} because it represents ${favoriteObject[thing]}.`);
}
//-----------------------------------
//exercise 21
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('New York', 'USA'));
console.log(city_country('Tokyo', 'Japan'));
//-----------------------------------
//exercise 22
let lastname = 'ahsan';
let fname = true;
console.log(lastname);
let number = 0;
while (number < 70) {
    number += 10;
}
console.log(number);
//-----------------------------------
//exercise 23
let car = 'subaru';
console.log(`Is car == 'subaru'? I predict ${car === 'subaru'}`);
console.log(`Is car != 'subaru'? I predict ${car !== 'subaru'}`);
console.log(`Is car === 'toyota'? I predict ${car === 'toyota'}`);
console.log(`Is car !== 'toyota'? I predict ${car !== 'toyota'}`);
console.log(`Is car.toLowerCase() === 'subaru'? I predict ${car.toLowerCase() === 'subaru'}`);
console.log(`Is car.toLowerCase() !== 'subaru'? I predict ${car.toLowerCase() !== 'subaru'}`);
console.log(`Is car.length > 5 && car.charAt(0) === 's'? I predict ${car.length > 5 && car.charAt(0) === 's'}`);
console.log(`Is car.length < 5 || car.charAt(0) !== 's'? I predict ${car.length < 5 || car.charAt(0) !== 's'}`);
console.log(`Is car.includes('u')? I predict ${car.includes('u')}`);
console.log(`Is !car.includes('a')? I predict ${!car.includes('a')}`);
//-----------------------------------
//exercise 24
// Tests for equality and inequality with strings
const string1 = 'apple';
const string2 = 'orange';
console.log(`Is string1 === string2? ${string1 === string2}`);
console.log(`Is string1 !== string2? ${string1 !== string2}`);
// Tests using the lower case function
const mixedCaseString = 'TeSt';
console.log(`Is mixedCaseString.toLowerCase() === 'test'? ${mixedCaseString.toLowerCase() === 'test'}`);
console.log(`Is mixedCaseString.toLowerCase() !== 'test'? ${mixedCaseString.toLowerCase() !== 'test'}`);
// Numerical tests
const number1 = 10;
const number2 = 5;
console.log(`Is number1 === number2? ${number1 === number2}`);
console.log(`Is number1 !== number2? ${number1 !== number2}`);
console.log(`Is number1 > number2? ${number1 > number2}`);
console.log(`Is number1 < number2? ${number1 < number2}`);
console.log(`Is number1 >= number2? ${number1 >= number2}`);
console.log(`Is number1 <= number2? ${number1 <= number2}`);
// Tests using "and" and "or" operators
const value1 = true;
const value2 = false;
console.log(`Is value1 && value2? ${value1 && value2}`);
console.log(`Is value1 || value2? ${value1 || value2}`);
// Test whether an item is in an array
const fruits = ['apple', 'orange', 'banana'];
console.log(`Is 'apple' in the array? ${fruits.includes('apple')}`);
console.log(`Is 'grape' in the array? ${fruits.includes('grape')}`);
// Test whether an item is not in an array
const colors = ['red', 'blue', 'green'];
console.log(`Is 'yellow' not in the array? ${!colors.includes('yellow')}`);
console.log(`Is 'blue' not in the asrray? ${!colors.includes('blue')}`);
//-----------------------------------
//exercise 25
const alienColor = 'green';
if (alienColor === 'green') {
    console.log('You just earned 5 points!');
}
//-----------------------------------
// exercise 26
const alienColor1 = 'yellow'; // Change color to test different paths
if (alienColor1 === 'green') {
    console.log('You just earned 5 points for shooting the alien.');
}
else {
    console.log('You just earned 10 points.');
}
//-----------------------------------
//exercise 27
const alienColor2 = 'red'; // Change color to test different paths
if (alienColor2 === 'green') {
    console.log('You earned 5 points.');
}
else if (alienColor2 === 'yellow') {
    console.log('You earned 10 points.');
}
else if (alienColor2 === 'red') {
    console.log('You earned 15 points.');
}
//-----------------------------------
//exercise 28
const age = 25; // Change age to test different stages
if (age < 2) {
    console.log('The person is a baby.');
}
else if (age < 4) {
    console.log('The person is a toddler.');
}
else if (age < 13) {
    console.log('The person is a kid.');
}
else if (age < 20) {
    console.log('The person is a teenager.');
}
else if (age < 65) {
    console.log('The person is an adult.');
}
else {
    console.log('The person is an elder.');
}
//-----------------------------------
//exercise 29
const favoriteFruits = ['apple', 'banana', 'orange'];
for (const fruit of favoriteFruits) {
    console.log(`You really like ${fruit}s!`);
}
//-----------------------------------
//exercise 30
const usernames = ['admin', 'Eric', 'John', 'Jane', 'Alice'];
for (const username of usernames) {
    if (username === 'admin') {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//-----------------------------------
//exercise 31
const userArray = [];
if (userArray.length === 0) {
    console.log(`We need to find some users!`);
}
// Remove all usernames
usernames.length = 0;
// Now userArray is empty
//-----------------------------------
//exercise 32
const currentUsers = ['John', 'Jane', 'admin', 'Eric', 'Alice'];
const newUsers = ['Bob', 'admin', 'Eve', 'Charlie', 'Alice'];
for (const newUser of newUsers) {
    if (currentUsers.map((user) => user.toLowerCase()).includes(newUser.toLowerCase())) {
        console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}
//-----------------------------------
//exercise 33
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    let ordinal = '';
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log(`${number}${ordinal}`);
}
//-----------------------------------
//exercise 34
const favoritePizzas = ['Pepperoni', 'Margherita', 'Vegetarian'];
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log(`I really love pizza!`);
//-----------------------------------
//exercise 35
const commonAnimals = ['Dog', 'Cat', 'Rabbit'];
for (const animal of commonAnimals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log(`Any of these animals would make a great pet!`);
//-----------------------------------
//exercise 36
function makeShirt(size, message) {
    console.log(`Shirt summary: Size - ${size}, Message - ${message}`);
}
makeShirt('Large', 'Hello World!');
//-----------------------------------
//exercise 37
function makeShirt1(size = 'Large', message = 'I love TypeScript') {
    console.log(`Shirt summary: Size - ${size}, Message - ${message}`);
}
makeShirt1(); // Large shirt with default message
makeShirt1('Medium'); // Medium shirt with default message
makeShirt1('Small', 'Different message'); // Small shirt with a different message
//-----------------------------------
//exercise 38
function describeCity(city, country = 'Unknown') {
    console.log(`${city} is in ${country}.`);
}
describeCity('Karachi', 'Pakistan');
describeCity('New York');
describeCity('Tokyo', 'Japan');
//-----------------------------------
//exercise 39
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
console.log(cityCountry('Lahore', 'Pakistan'));
console.log(cityCountry('Paris', 'France'));
console.log(cityCountry('Sydney', 'Australia'));
//-----------------------------------
//exercise 40
function makeAlbum(artist, title, tracks) {
    const album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum('Artist1', 'Album1');
const album2 = makeAlbum('Artist2', 'Album2', 12);
const album3 = makeAlbum('Artist3', 'Album3', 8);
console.log(album1);
console.log(album2);
console.log(album3);
//-----------------------------------
//exercise 41
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
showMagicians(magicianNames);
//-----------------------------------
//exercise 42
function makeGreat(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
const greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
//-----------------------------------
//exercise 43
const originalMagicians = [...magicianNames];
const changedMagicians = makeGreat([...magicianNames]);
showMagicians(originalMagicians);
showMagicians(changedMagicians);
//-----------------------------------
//exercise 44
function makeSandwich(...items) {
    console.log(`Summary of the sandwich: ${items.join(', ')}`);
}
makeSandwich('Bread', 'Cheese', 'Tomato', 'Lettuce');
makeSandwich('Bread', 'Turkey', 'Mayo');
makeSandwich('Wrap', 'Chicken', 'Avocado');
//-----------------------------------
//exercise 45
function carInformation(manufacturer, model, ...features) {
    const car = {
        manufacturer,
        model,
        features,
    };
    return car;
}
const car1 = carInformation('Toyota', 'Camry', 'Color: Blue', 'Sunroof');
const car2 = carInformation('Tesla', 'Model S', 'Color: Red', 'Autopilot', 'Electric');
const car3 = carInformation('Ford', 'Mustang', 'Color: Black');
console.log(car1);
console.log(car2);
console.log(car3);
export {};
//? End
