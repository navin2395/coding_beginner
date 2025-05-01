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
restaurant.orderdelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  starterIndex: 2,
  mainIndex: 2,
});

restaurant.orderdelivery({
  starterIndex: 2,
  address: 'Via del Sole,21',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//destructuring object with new variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default value with variable change
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
let obj = { a: 23, b: 7, c: 14 };
// {a,b}=obj; //Uncaught SyntaxError: Unexpected token '='

// to solve above problem we write object properties in paranthesis
({ a, b } = obj);
console.log(a, b);

//nested object

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(open, close);  //11 23
console.log(o, c); //11 23
