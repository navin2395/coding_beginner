'strict mode';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderdelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order Delivered! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${address}  at ${time}`
    );
  },
  orderpizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

////// MAP FUNDAMENTALS ///////

/* const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenzo,Italy');
console.log(rest.set(2, 'Lisbon,Portugal'));
console.log(
  rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open D:')
    .set(false, 'We are closed:')
);

console.log(rest.get('name'));
console.log(rest.get(false));

const time = 21;

// console.log(rest.get(time > 'close' ? false : true));
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //true an dit returns rest.get(true)=We are open

console.log('has property:', rest.has('categories')); //true
console.log('deletereturn:', rest.delete(2)); //true
console.log(rest);
console.log(rest.size); //7

// rest.clear();
// console.log(rest); //Map(0) {size: 0}
//passing array as map keys
arr = [1, 2];
// rest.set([1, 2], 'test');
rest.set(arr, 'test');
console.log(rest);

// console.log([1, 2]); //undefined because here both [1,2] array are stored in different memory addresses in heap
console.log(rest.get(arr));

//passing dom element as map keys
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.get(document.querySelector('h1')));
 */

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

//convert object to map
console.log(Object.entries(restaurant.openingHours));
const hours = new Map(Object.entries(restaurant.openingHours));
console.log(hours);

//for of loop
console.log(question.get('question'));
for (const [key, value] of question) {
  //console.log(key); //(2) ['question', 'What is the best programming language in the world?'] and so on upto [false,'try again']
  if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
}
//Quiz App

// const answer = Number(prompt('Enter your Answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer)); //question.get(true)  => Correct

// for (const [key, value] of question) {
//   if (typeof key === 'number')
//     if (key === answer) console.log(`Answer is ${value}`);
// }

//converting map to array

const array = [...question];
console.log(array);

console.log(question.entries());
console.log([...question.entries()]);
console.log(question.keys());
console.log(question.values());
