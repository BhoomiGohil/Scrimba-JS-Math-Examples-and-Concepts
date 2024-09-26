// // String Concatenation
// let firstName = "Bhoomi",
//   lastName = "Gohil";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// //////////////////////////////////////////////////

// // Greeting Function
// let name = "Linda",
//   greeting = "Hi there";

// function greet() {
//   console.log(greeting + ", " + name + "!");
// }
// greet();

// //////////////////////////////////////////////////////

// // Points System
// let myPoints = 3;

// function add3Points() {
//   myPoints += 3;
// }

// function remove1Point() {
//   myPoints -= 1;
// }

// // Modifying Points
// add3Points(); // myPoints = 6
// add3Points(); // myPoints = 9
// add3Points(); // myPoints = 12
// remove1Point(); // myPoints = 11
// remove1Point(); // myPoints = 10

// console.log(myPoints); // Output the final points

// ///////////////////////////////////////////////////////

// // Demonstrating Type Coercion
// console.log("2" + 2); // "22"
// console.log(11 + 7); // 18
// console.log(6 + "5"); // "65"
// console.log("My points: " + 5 + 9); // "My points: 59"
// console.log(2 + 2); // 4
// console.log("11" + "14"); // "1114"

// //////////////////////////////////////////////////////////

// // Error Handling Function
// let errorParagraph = document.getElementById("error");

// function purchase() {
//   errorParagraph.textContent = "Something went wrong, please try again!";
// }

////////////////////////////////////////////////////////

// Basic Math Operations
let num1 = 8,
  num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add() {
  let result = num1 + num2;
  sumEl.textContent = "Sum: " + result;
}

function subtract() {
  let result = num1 - num2;
  sumEl.textContent = "Sum: " + result;
}

function divide() {
  let result = num1 / num2;
  sumEl.textContent = "Sum: " + result;
}

function multiply() {
  let result = num1 * num2;
  sumEl.textContent = "Sum: " + result;
}
