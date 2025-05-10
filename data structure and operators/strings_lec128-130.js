'strict mode';

///////////////////////////////////////
// Working With Strings - Part 1
// const airline = 'Tap air Portugal';
// const airlineCopy = 'Tap' + ' air' + ' Portugal'; //code above the same string using + operator
// console.log(airline);
// console.log(airlineCopy);

// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// // for (let i = 0; i < plane.length; i++) {
// //   console.log('looping:', plane[i]);
// // }

// //to operate on strings to fetch character
// console.log('B737'[0]); //B

// //to find length of string
// console.log(airline.length); //16
// console.log('B737'.length); //4

// //to find index  of a substring in first occurence in string
// console.log(airline.indexOf('r')); //6

// //to find index  of a substring in last occurence in string
// console.log(airline.lastIndexOf('r')); //10

// //to slice method
// console.log(airline.slice(4)); //air Portugal
// console.log(airline.slice(4, 7)); //air  //imp not include the end index i.e index from 4 to 6

// console.log(airline.slice(0, airline.indexOf(' '))); //Tap
// console.log(airline.slice(airline.indexOf(' '))); // <space>air portugal becaus it include the first index of string
// console.log(airline.slice(airline.indexOf(' ') + 1)); // air portugal because it excludes the first index of string

// console.log(airline.slice(-2)); //al
// console.log(airline.slice(-3)); //gal
// console.log(airline.slice(-10, -7)); //r P  (10th from end to 7th from end)
// console.log(airline.slice(1, -1)); //ap air Portuga (start slicing  from 1 index upto index -2 which is excluding -1)=-1 not included

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seat

//   const s = seat.slice(-1);

//   console.log(
//     `given seat number ${seat} is a ${
//       s === ('B' || 'E') ? 'middle' : 'not a middle'
//     } seat`
//   );

//   // if (seat.includes('B' || 'E'))
//   //   console.log(`given seat number ${seat} is a middle seat`);  //alternate code using includes
// };
// checkMiddleSeat('11C');
// checkMiddleSeat('23B');

// console.log(new String('jonas')); //String {'jonas'} //converts string into objects
// /* 0: "j"
// 1: "o"
// 2: "n"
// 3: "a"
// 4: "s"
// length: 5
// [[Prototype]]:String
// [[PrimitiveValue]]: "jonas"  */
// console.log(new String('navin'));
// console.log(typeof new String('navin'));  //object

///////////////////////////////////////
// Working With Strings - Part 2

/* const airline = 'Tap air Portugal';
const plane = 'A320';

console.log(airline.toUpperCase()); //TAP AIR PORTUGAL
console.log(airline.toLowerCase()); //tap air portugal

console.log('jonas'.toUpperCase());

//fix capitalization
const passenger = 'jOnAS';
let passengerLower = passenger.toLowerCase(); //convert first to lower case //jonas

console.log(passengerLower); //jonas

// const firstLetter = passengerLower.slice(0, 1);
// const remainLetter = passengerLower.slice(1);

// console.log(remainLetter);
// console.log(firstLetter);

// const capitalize = firstLetter.toUpperCase() + remainLetter;
// console.log(capitalize); //Jonas

const capitalizeCopy =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(capitalizeCopy);

function capitalization(passengerLower) {
  const capitalizeCopy =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(capitalizeCopy);
}

capitalization(passengerLower); //Jonas

//comparing Email

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

//alternate way
const normalEmail = loginEmail.toLowerCase().trim(); //loginemail.toLowercase=  (hello@jonas.io).trim()=hello@jonas.io
console.log(normalEmail);

console.log(email === normalEmail); //true

//replacing parts of string

const priceGB = '288,97&';
const priceUS = priceGB.replace(',', '.').replace('&', '$'); //288.97&.replace('&','$')=288.97$
console.log(priceUS);

const annoucement =
  'All passengers come to boarding point 23.Boarding point 23!';

const annoucement2 = 'Please hurry up.please hurry up gates are about to close';

console.log(annoucement.replace('point', 'gate')); //All passengers come to boarding gate 23.Boarding point 23!
//for all occurences
console.log(annoucement.replace(/point/g, 'gate')); //All passengers come to boarding gate 23.Boarding gate 23!  //for all accurences
console.log(annoucement.replaceAll('point', 'gate')); //All passengers come to boarding gate 23.Boarding gate 23!

//case insensitive search
console.log(annoucement2.replace(/Please/gi, 'Request')); //Request hurry up.Request hurry up gates are about to close /global insensitive

//Boolean values returning methods

const aeroplane = 'A320neo';
console.log(aeroplane.includes('A320')); //true
console.log(aeroplane.includes('Boeing')); //false

console.log(aeroplane.startsWith('A32')); //true

const aero = 'AirBus a320neo';
if (aero.startsWith('AirBus') && aero.endsWith('neo')) {
  console.log('Part of new Airbus Family');
} */

//practice Exercise

/* const checkBaggage = function (items) {
  //convert string to lower case
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed on board');
  else console.log('Welcome Aboard!');
};

checkBaggage('I have a Laptop,some Food and a Pocket Knife'); //You are not allowed on board as it has string knife
checkBaggage('sock and camera'); //Welcome Aboard!
checkBaggage('Got some snacks and a gun for protection'); //You are not allowed on board
 */
///////////////////////////////////////
// Working With Strings - Part 3

//split and join

console.log('a+very+nice+string'.split('+')); // Array(4) ['a', 'very', 'nice', 'string']
console.log('jonas schmedtmann'.split(' ')); //(2) ['jonas', 'schmedtmann']

const [firstName, lastName] = 'jonas schmedtmann'.split(' ');
console.log(firstName, lastName); //jonas schmedtmann

console.log(['Mr.', firstName, lastName.toUpperCase()].join()); //Mr.,jonas,SCHMEDTMANN    (default is a comma)
console.log(['Mr.', firstName, lastName.toUpperCase()].join(' ')); //Mr. jonas SCHMEDTMANN (seperated by space delimiter)
console.log(['Mr.', firstName, lastName.toUpperCase()].join('')); //Mr.jonasSCHMEDTMANN  (empty string so without any space)

//transform first letter into capital
const capitalizeName = function (name) {
  const elements = name.split(' ');
  const upperName = [];
  console.log(elements);

  for (const n of elements) {
    upperName.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(upperName);
  console.log(upperName.join(' '));
};
//   for (let i = 0; i < elements.length; i++) {
//     elements[i] = elements[i].slice(0, 1).toUpperCase() + elements[i].slice(1);
//     // console.log(elements[i]);
//   }
//   const fullName = elements.join(' ');
//   console.log(fullName);
// };

capitalizeName('jessica ann smith davis');

//padding a string

const message = 'go to gate 23!';

const paddedStrStart = message.padStart(20, '+'); //++++++go to gate 23!
console.log(paddedStrStart);

const paddedStrEnd = message.padEnd(20, '+'); //go to gate 23!++++++
console.log(paddedStrEnd);

const initials = 'jonas';

const paddedstr = initials.padStart(20, '+').padEnd(30, '+');
console.log(paddedstr); //+++++++++++++++jonas++++++++++

const maskCreditCard = function (number) {
  const str = String(number);
  const lastDigits = str.slice(-4);

  const paddedstr = lastDigits.padStart(str.length, '*');
  console.log(paddedstr);
};

maskCreditCard(1256256125621456);
// maskCreditCard(4027678152635472);

//Repeat method

const message2 = 'Bad Weather... All departures Delayed\n';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
