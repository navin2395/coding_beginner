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
// checkIn('LH123', jonas);

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
// transform('Javascirpt is the best!', firstWordUpper); //firstwordUpper here acts as call back function
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
// salute('Jonas');

// greet('hey')('Steve');

// const remind = greetings => {
//   return name => {
//     console.log(`${greetings} ${name}`);
//   };
// };

// remind('howdy')('Modi');
// //using arrow functions

// const remindercopy = greetings => name => console.log(`${greetings} ${name}`);

// remindercopy('howdy')('Stevenson');

//lec 140

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

lufthansa.book(239, 'Jonas');

const book = lufthansa.book;
// book(23, 'Sarah Willams'); // Uncaught TypeError: Cannot read properties of undefined (reading 'airline') at book
book.call(eurowings, 239, 'Sarah Williams'); //lufthansa.book.call(eurowings,arguments in array like format)
console.log(eurowings);

//apply method
// Differences from call()
// apply() takes arguments as an array

// call() takes arguments individually

// Both set the this context

const flightData = [238, 'Goerge Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData); //using spread operator .call(eurowings,238,'George Cooper')
// apply is not used anymore
