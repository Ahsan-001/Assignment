"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exercise 01
// I have installed Node.js, TypeScript and VS Code on my computer.
//-----------------------------------
//exercise 02
// const personeName1 = "Ahsan";
// console.log(`Hello ${personeName1}, would you like to learn some AI today?`);
//-----------------------------------
//exercise 03
// const personeName = "Ahsan";
// console.log(personeName.toLowerCase());
// console.log(personeName.toUpperCase());
// console.log(personeName.toLocaleLowerCase());
//-----------------------------------
//exercise 04
// const author = "Albert Einstein";
// const quote = "A person who never made a mistake never tried anything new.";
// console.log(`${author} once said, "${quote}"`);
//-----------------------------------
//exercise 05
// const famousPerson = "Albert Einstein";
// const message = `${famousPerson} once said, "A person who never made a mistake never tried anything new."`;
// console.log(message);
//-----------------------------------
//exercise 06
// const pname = "\t  Ahsan Saeed \n";
// console.log(pname);
// console.log(pname.trim());
//-----------------------------------
//exercise 07
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
//-----------------------------------
//exercise 09
// const favoriteNumber = 1;
// console.log(`My favorite number is ${favoriteNumber}.`);
//--------.
// ---------------------------
//exercise 10
// const comment = 'Ahsan';
// console.log(`Hello, ${comment}!`);
//-----------------------------------
//exercise 11
// const names1 = ['Ahmed', 'Jawad', 'Hafiz', 'Zain'];
// for (const name of names1) {
//   console.log(name);
// }
//-----------------------------------
//exercise 12
// const names = ['John', 'Jane', 'Smith', 'Alice'];
// for (const name of names) {
//   console.log(`Hello, ${name}!`);
// }
//-----------------------------------
//exercise 13
// const transportation = ['car', 'motorcycle', 'bicycle'];
// for (const item of transportation) {
//   console.log(`I would like to own a ${item}.`);
// }
//-----------------------------------
//exercise 14
// const guestList2 = ['John', 'Jane', 'Smith'];
// for (const guest of guestList2) {
//   console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
// }
//-----------------------------------
//exercise 15
// const guestList1 = ['John', 'Jane', 'Bob'];
// const guestCannotMakeIt = 'Jane';
// const newGuest = 'Alice';
// const index = guestList1.indexOf(guestCannotMakeIt);
// if (index !== -1) {
//   guestList1[index] = newGuest;
// }
// for (const guest of guestList1) {
//   console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
// }
//-----------------------------------
//exercise 16
// const guestListt = ['John', 'Jane', 'Bob'];
// console.log('We found a bigger dinner table!');
// guestListt.unshift('Alice'); 
// guestListt.splice(Math.floor(guestListt.length / 2), 0, 'Mike'); 
// guestListt.push('Lily'); 
// for (const guest of guestListt) {
//   console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
// }
//-----------------------------------
//exercise 17
// const guestList = ['John', 'Jane', 'Bob', 'Alice', 'Mike', 'Lily'];
// console.log('Sorry, the new dinner table won\'t arrive in time.');
// while (guestList.length > 2) {
//   const removedGuest = guestList.pop();
//   console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
// }
// for (const guest of guestList) {
//   console.log(`Dear ${guest}, you are still invited to dinner. Please join us!`);
// }
// guestList.length = 0; // Empty the list
// console.log(guestList); // Print the empty list
//-----------------------------------
//exercise 18
// const placesToVisit = ['Paris', 'Tokyo', 'New York', 'Rome', 'Sydney'];
// console.log('Original order:');
// console.log(placesToVisit);
// console.log('Alphabetical order:');
// console.log(placesToVisit.slice().sort());
// console.log('Original order:');
// console.log(placesToVisit);
// console.log('Reverse alphabetical order:');
// console.log(placesToVisit.slice().sort().reverse());
// console.log('Original order:');
// console.log(placesToVisit);
// placesToVisit.reverse(); // Reverse the order of the list
// console.log('Reversed order:');
// console.log(placesToVisit);
// placesToVisit.reverse(); // Reverse the order again to get back the original order
// console.log('Original order:');
// console.log(placesToVisit);
// placesToVisit.sort(); // Sort the list in alphabetical order
// console.log('Alphabetical order:');
// console.log(placesToVisit);
// placesToVisit.sort().reverse(); // Sort the list in reverse alphabetical order
// console.log('Reverse alphabetical order:');
// console.log(placesToVisit);
//-----------------------------------
//exercise 19
// const guests = ['Ahmed', 'Hashim', 'Nabeel'];
// console.log(`You are inviting ${guests.length} people to dinner.`);
//-----------------------------------
//exercise 20
// const cities = ['Lahore', 'Karachi', 'Islamabad'];
// for (const city of cities) {
//   console.log(city);
// }
//-----------------------------------
//exercise 21
// function city_country(city: string, country: string): string {
//   return `${city}, ${country}`;
// }
// console.log(city_country('Lahore', 'Pakistan'));
// console.log(city_country('New York', 'USA'));
// console.log(city_country('Tokyo', 'Japan'));
//-----------------------------------
//exercise 22
// let lastname: string = 'ahsan';
// let fname: boolean = true;
// console.log(lastname);
// let number: number = 0;
// while (number < 70) {
//     number += 10;
// }
// console.log(number);
