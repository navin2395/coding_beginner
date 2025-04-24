'use strict';

///////////////////////////////////////
// Scoping in Practice

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName} is ${age} years old,born in ${birthYear} `; //output is only accessible to printAge() scope
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Steven';
//       const isMillenial = `oh, you are millenial,${firstName}`; //firstname delcared in if scope is different than of global scope and its priority is from current scope to parent scope
//       //var wasMillenial = `oh, you are millenial,${firstName}`;
//       console.log(isMillenial);
//       function add(a, b) {
//         return a + b;
//       }
//       output = 'NEW OUTPUT';
//       console.log(output);
//     }

//     //console.log(wasMillenial);  //but var variable is scoped to its  nearest function
//     //console.log(isMillenial); //[part of blocked scope] will give a reference error

//     //console.log(add(2, 3)); //Uncaught ReferenceError: add is not defined  //at printAge // at calcAge and at  script.js   } unless used to not use strict mode they are always block scoped
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Jonas'; //const is a global variable
// console.log(calcAge(1991));
//console.log(age);
//printAge();

///////////////////////////////////////
// Hoisting and TDZ in Practice
//

//hoisting with variables
// console.log(me); // undefined
// //console.log(birthYear);    //Cannot access 'job' before initialization
// console.log(job); ////Cannot access 'job' before initialization

// var me = 'Jonas';
// const birthYear = 1991;
// let job = 'teacher';

// console.log(addDecl(2, 3)); //5
// console.log(addExpr(2, 3)); //addExpr is not a function as add expr is undefined and undefined(2,3) is not a vaid function
// console.log(addArrow(2, 3)); //error message:Cannot access 'addArrow' before initialization

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

//example
// console.log(numProducts);
// if (!numProducts) DeleteShoppingCart(); //here using num products is of a falsy value as undefined is a falsy value so the if conditiobn becomes true and the function is called/

// var numProducts = 10;

// function DeleteShoppingCart() {
//   console.log('You have deleted the Shopping Cart');
// }

// var x = 2;
// let y = 3;
// const z = 4;
// console.log(x === window.x); //var creates a property in window object as soon as it is declared while let and const are unitialized and are not a property of window object

//this keyword
///////////////
///////////////

// console.log(this); //pointing to parent 'window' object in global scope

// const calcAge = function (birthYear) {
//   //console.log(2037 - this.birthYear); //annot read properties of undefined (reading 'birthYear') at  calcAge
//   console.log(2037 - birthYear);
//   //   console.log(this);   //undefined
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   //console.log(2037 - this.birthYear); //annot read properties of undefined (reading 'birthYear') at  calcAge
//   console.log(2037 - birthYear);
//   console.log(this); //ponting to global object which is window object
// };
// calcAgeArrow(1995);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //object:jonas
//     console.log(this.year); //1991
//     return 2037 - this.year;
//   },
// };
// const age = jonas.calcAge();
// console.log(age); //46

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge; //borrow calcAge  method from jonas object
// console.log(matilda.calcAge()); //it contains output as {year: 2017, calcAge: ƒ}
// //  2017:matilda.year
// //20 matilda.calcAge (2037-2017)

// const f = jonas.calcAge; //f is assigned jonas.calcAge function as a expression
// f(); //Cannot read properties of undefined (reading 'year')  for normal function call this is undefined so undefined.year doesn't exist

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

//  const firstName = 'Matilda'; //initialization of varibale using const/let donot create property in window object(global)
// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //object:jonas
//     console.log(this.year); //1991

//     // const self = this; //this is jonas object=self
//     // console.log(self);
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year); //this(jonas).year=self.year
//       console.log(this.year >= 1981 && this.year <= 1996); // Uncaught TypeError: Cannot read properties of undefined (reading 'year')
//     };
//     isMillenial();
//     return 2037 - this.year;
//   },
//   greet: () => {
//     console.log(this); //it is pointing to window object that is owner of nearest lexical function
//     console.log(`Hey it is ${this.firstName}`); // Hey it is undefined
//   },
// };

// //jonas.greet();
// jonas.calcAge();
//Solustion:1
//  const self=this
// const isMillenial = function () {
//     console.log(this);
//     console.log(self.year); //this(jonas).year=self.year
//     console.log(self.year >= 1981 && self.year <= 1996); // true
//   };

// const isMillenial = function () {
//     console.log(this);  //undefined because isMillenial is function call and its value for this is undefined
//     console.log(this.year); // undefined.year is undefined
//     console.log(this.year >= 1981 && this.year <= 1996); // Uncaught TypeError: Cannot read properties of undefined (reading 'year')
//   };

//arguments leyword

// const addExpr = function (a, b) {
//   console.log(arguments);
//   console.log(arguments[2]);
//   return a + b;
// };
// addExpr(2, 5, 8, 12);

// const addArrow = (a, b) => {
//   console.log(arguments); //Uncaught ReferenceError: arguments is not defined at addArrow
//   return a + b;
// };
// addArrow(2, 5);

///////////////////////////////////////
// Object References in Practice (Shallow vs. Deep Copies)
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//   }       //it is stored in heap of javascript engine

// jessica=object reference is stored in callstack in variable environment

const marriedjessica = jessica; //marriedjessica only points to the memory address of object jessica stored with reference name jessica in call stack
marriedjessica.lastName = 'Davis'; //so changing property through marriedjessica will alter the property of the original jessica object
console.log('Before:', jessica);
console.log('After', marriedjessica);

//jessica = { x: 29 }; //new object created with new memory address in heap with
//console.log(jessica);
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//shallow copy
// const jessica_copy = { ...jessica2 };   //only copies to level 1 and not for nested objects
// jessica_copy.lastName = 'Davis';
// console.log(jessica2, jessica_copy);

// jessica_copy.family.push('Mary', 'John');
// console.log('Before:', jessica2);
// console.log('After', jessica_copy);

//deep Copy/Clone

const jessicaClone = structuredClone(jessica2); //all nested objects  will also be copied
jessicaClone.family.push('Mary', 'John');
console.log('Original:', jessica2);
console.log('Cloned', jessicaClone);
