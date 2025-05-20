'use strict';

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPasengers = 1,
//   price = 199 * numPasengers
// ) {
//   //default value using shortcircuiting in ES5
//   //   numPasengers = numPasengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPasengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
//   //   console.log(bookings);
// };

// createBooking('lH123'); //{flightNum: 'lH123', numPasengers: 1, price: 199}
// createBooking('LH123', 2, 800); //{flightNum: 'LH123', numPasengers: 2, price: 800}
// createBooking('LH123', 3); //{flightNum: 'LH123', numPasengers: 3, price: 597}
// createBooking('LH123', 4); //{flightNum: 'LH123', numPasengers: 4, price: 796}

// createBooking('LH123', undefined, 209); //skip a default parameter

//lec 135

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 1256457589,
// };

// const checkIn = function (flightNum, passenger) {
//   //if you want a copy of object we use spread operator for level-1 cloning
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 1256457589) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// checkIn('LH123', jonas);  //Wrong Passport

//lec 136

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const firstWordUpper = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// // transform is a higher order function
// const transform = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Trasnformed String:${fn(str)}`);
//   console.log(`Transformed by:${fn.name}`);
// };
// //javascript uses callback all the time
// // transform('Javascirpt is the best!', firstWordUpper); //firstwordUpper here acts as call back function
// transform('Javascirpt is the best!', oneWord);

//Exercise 1: Simple Callback
//Problem The first step in our journey through callbacks in JavaScript is learning to convert a string to uppercase using a callback. This simple yet effective exercise introduces us to the concept of passing functions as arguments and helps us understand the power of higher-order functions.

// function convertUpperString(str) {
//   return str.toUpperCase();
// }

// function convert(str, callback) {
//   return callback(str);
// }

// const output = convert('jonas', convertUpperString);
// console.log(output);

// Exercise 2: Callback with Array
// Problem
// Now, let’s move to an exercise involving arrays and callbacks. Our goal is to apply a callback to every element of an array. This exercise helps us understand how callbacks can be used to manipulate and interact with complex data structures like arrays.

// multiply each element of array by 2

// function toConvert(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// }
// const num = [1, 2, 3];
// toConvert(num, (element, index) => {
//   console.log(`Index:${index} Element:${element * 2}`);
// });

//lec 139

// const greet = function (greetings) {
//   return function (name) {
//     console.log(`${greetings} ${name}`);
//   };
// };
// const salute = greet('Hello how are you');
// salute('Jonas'); //Hello how are you Jonas

// // without function declaration as expression
// greet('hey')('Steve'); //hey Steve

// const remind = greetings => {
//   return name => {
//     console.log(`${greetings} ${name}`);
//   };
// };

// remind('howdy')('Modi');  //howdy Modi
// //using arrow functions

// const remindercopy = greetings => name => console.log(`${greetings} ${name}`);

// remindercopy('howdy')('Stevenson');

//lec 140

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// lufthansa.book(239, 'Jonas');

// const book = lufthansa.book;
// // book(23, 'Sarah Willams'); // Uncaught TypeError: Cannot read properties of undefined (reading 'airline') at book
// book.call(eurowings, 239, 'Sarah Williams'); //lufthansa.book.call(eurowings,arguments in array like format)
// console.log(eurowings);

// //apply method
// // Differences from call()
// // apply() takes arguments as an array

// // call() takes arguments individually

// // Both set the this context

// const flightData = [238, 'Goerge Cooper'];
// book.apply(eurowings, flightData);
// console.log(eurowings);

// book.call(eurowings, ...flightData); //using spread operator .call(eurowings,238,'George Cooper')
// // apply is not used anymore

// //bind method

// const bookEW = book.bind(eurowings); //bookEW is bound to this object which is eurowings
// const bookLF = book.bind(lufthansa); //bookLF is bound to this object which is lufthansa

// bookEW(125, 'Steven Gerrard');

// //Partial Function Application:
// const bookEW23 = book.bind(eurowings, 23); //flightNum parameter fixed to 23
// bookEW23('Rublev Gonsalves'); //Rublev Gonsalves booked a seat on Eurowings flight EW 23
// bookEW23('Martha Cooper'); //Martha Cooper booked a seat on Eurowings flight EW 23

// //With Event Listener

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this); // <button class="buy">Buy new plane 🛩</button> the dom element to which event handler is attached to
//   this.planes++;
//   console.log(this.planes); //this doesnot refer to lufthansa object hence output is NaN
// };
// lufthansa.buyPlane(); //301

// // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial Application:example

// const addTax = (rate, value) => (value += (value * rate) / 100);
// console.log(addTax(10, 200)); //220

// const addTAX10 = addTax.bind(null, 10);
// console.log(addTAX10(200)); //220

// //here VAT is 23%
// const addVAT23 = addTax.bind(null, 23);
// //addVAT23 = value=> value=value+(value*0.23)
// console.log(addVAT23(100)); //order of argument is important   //123

// xfunction returning another function
// const addTaxation = function (rate) {
//   return value => (value += value * (rate / 100));
// };

// console.log(addTaxation(10)(100));

//lec 143
//iife =immediatel invoked function expression is used to call the function only once
//that means as you call thefucntion it disappers and can never be called again generally used in async/awaits

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// // function () {
// //   console.log('This will never run again');
// // }     //Uncaught SyntaxError: Function statements require a function name
// //convert the function statemnt into expression by enclosing the statement in paranthesis
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();
// //This will never run again
// //this is called IIFE

// //IIFE for arrow functions
// (() => console.log('This will also never run again'))(); //convert statement into expression
// //This will also never run again

// //talk about function scope
// // console.log(isPrivate); //Uncaught ReferenceError: isPrivate is not defined bcoz isPrivate is encapsulated in function block
// //So such variables are called private or encapsulated variables which are not accessible by global scope.

// {
//   var isBoolean = true; //var data type is not blocked scope
//   let isConstant = 'a';
//   const isNumber = 45;
// }
// console.log(isBoolean); //true
// console.log(isConstant); // Uncaught ReferenceError: isConstant is not defined
// console.log(isNumber); // Uncaught ReferenceError: isNumber is not defined

// IIFE is not used now as to create blocked scope we require only paranthesis {} and no need to function call like IIFE

//lec 144
///////////////////////////////////////
// Closures

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);
// secureBooking()();  //function calling without declaring function as an expression

//lec145
///////////////////////////////////////
// More Closure Examples

//example-1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);

// //reassigning f function
// h();
// f(); //backpack is override as b=777
// f();
// console.dir(f); //[[SCOPES]] 0 Closure (g) {a: 23} //46

//example-2
//closures as timer
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000); //here wait is in seconds
  console.log(`We are boarding in ${wait} seconds`);
};

//getting ID of timer to clear out timer
const timerID = setTimeout(() => {
  console.log('hello');
}, 5000);
console.log(timerID); //1
clearTimeout(timerID); //clearing out timout with ID=timerID  //hello will not be printed

const perGroup = 1000; //so it takes global scoping of perGroup but if perGroup is closed in parent variable environment it will have priority over global scoped  closure has more priority over scope chain

boardPassengers(180, 5);

//here the callback function of setTimeout() takes argumnent n and variable perGroup from its variable environment of boardPasengers in which setTimeout(fn,timer) basically fn is created
