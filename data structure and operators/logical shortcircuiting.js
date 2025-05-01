'strict mode';
//shortcircuiting or operator

// console.log('-----OR-----');
// console.log(3 || 'Jonas'); //3 as it is a truthy value and or operator shortcircuit for truthy values
// //ShortCircuiting IN OR OPERATOR means if the first operand is a truthy value it doesnot bother to look at other operands and returns truthy value

// console.log(' ' || 'Jonas'); //   open space
// console.log('' || 'Jonas'); //Jonas
// console.log(undefined || 'Jonas'); //jonas
// console.log(true || 0); //true
// console.log(undefined || null); //null
// console.log(undefined || 0 || '' || 'hello' || 23 || null);

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
// //Pratical example
// restaurant.numGuest = 0;
// const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuest || 10;
// console.log(guests2);

// console.log('-----AND-----');
// // ShortCircuiting IN AND OPERATOR means if the first operand is a Falsy value it doesnot bother to look at other operands and returns falsy value
// console.log(0 && 'jonas'); //0
// console.log(7 && 'jonas'); //jonas
// console.log('hello' && 23 && null && 'jonas'); //null

// //Practical Example

// if (restaurant.orderpizza) {
//   restaurant.orderpizza('mushrooms', 'spinach');
// }

// restaurant.orderdelivery && restaurant.orderpizza('mushrooms', 'spinach'); //restaurant.orderpizza is truthy value hence it will call restaurant.orderpizza('mushrooms', 'spinach')

//Nullish coalesing operator
// restaurant.numGuest = 0;

// const guests = restaurant.numGuest || 10; //it will shortcircuit as or is takes first truthy value and restaurant.numGuest is a falsy value

// const guests3 = restaurant.numGuest ?? 10; //Only null and undefined as flasy values (not o or '')
// console.log(guests3);

//Logical assignment

const rest1 = {
  name: 'Capri',
  //   numGuest: 20,
  numGuest: 0, //or assignment returns 10 as the numGuest value
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
//or assignment operator;
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// console.log(rest1); //20

// console.log(rest2); //10

// rest1.numGuest ||= 10;
// console.log(rest1);

// rest2.numGuest ||= 10; //returns the variable(property name) name as the given value if the variable(property name) is undefined;
// console.log(rest2);

//Nullish assignment operator

// rest1.numGuest ??= 10;
// console.log(rest1);

// rest2.numGuest ??= 10;
// console.log(rest2);

//and assignment operator
rest2.owner &&= 'anonymous';
console.log(rest2);

// rest1.owner = rest1.owner && 'anonymous'; //{name: 'Capri', numGuest: 0, owner: undefined}
rest1.owner &&= 'anonymous'; //{name: 'Capri', numGuest: 0}

console.log(rest1);
