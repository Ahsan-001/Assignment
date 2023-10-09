// let x; //undefined variable
// console.log(x); // It returns that undefined value
export {};
// let value = null;
// console.log(value); //It returns "null"
// console.log(10 / 3); // It returns the result in floating integter 
//? ------------------- check type of variable -------------
// let col = true;
// console.log(typeof col);
//? -------------------- Operators ------------------------
// let n1 = 10;
// console.log(n1); //10
// n1-=10; // compound assignment operator
// console.log(n1); 
// let n2 = 5;
// console.log(n2 == 5); //compare values
// console.log(n2 === 5); //compare values and data types
// console.log(n2 != 4); //not equals to
// console.log(3 + "3");
// console.log(3- - "3");
// console.log(3+ - "3");
// console.log(3- + "3");
// console.log(3+ + "3");
//? ----------------------- Arrays ---------------------------------
// // Using the Type[] syntax
// let numbers: number[] = [1, 2, 3, 4, 5];
// // Using the Array<Type> syntax
// let cities: Array<string> = ["Lahore, Peshawar, Multan"];
// // Accessing array elements
// let numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers[0]);
// console.log(numbers[3]);
// console.log(numbers.length);
// // Modifying array elements
// let numbers: number[] = [1, 2, 3, 4, 5];
// numbers[2] = 3;
// console.log(numbers);
// numbers.push(6);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.shift()
// console.log(numbers);
// numbers.unshift(0, 1)
// console.log(numbers);
// // Iterating over arrays
// let numbers: number[] = [1, 2, 3, 4, 5];
// //using a for loop
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// //Using forEach method
// numbers.forEach((num) => {
//     console.log(num);
// })
// //Arrays Methods
// let numbers: number[] = [2, 4, 1, 5, 3];
// // Sorting the array
// numbers.sort();
// console.log(numbers);
// // Reversing the array
// numbers.reverse();
// console.log(numbers);
// // Slicing the array
// let slicedNumbers = numbers.slice(-3, -1) 
// console.log(slicedNumbers);
//? ------------- Loop -------------------
// //for loop
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// //while loop  
// let i1 = 1;
// while (i1 <= 5) {
//   console.log(i1);
//   i1++;
// }
// //do-while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);
// // Using break
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//       break;
//     }
//     console.log(i);  // Output: 1, 2
//   }
// Using continue
//   for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//       continue;
//     }
//     console.log(i);   // Output: 1, 2, 4, 5
//   }
//! ------------------- Class 04 -----------------------
//? --------- JSON _ Javascript Object Notation -----------------
// JSON syntax
// const detail = {
//     "name": "Ahsan",
//     "age": 24,
//     "gender": "male",
// }
// console.log(detail.name, detail.age, detail.gender);
//! ------------------- Class 06-----------------------
//import and export
// import inquirer from "inquirer";
// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);
// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);
// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
