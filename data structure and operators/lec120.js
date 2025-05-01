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

//PROPERTY NAMES
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties); //(3) ['thu', 'fri', 'sat']
// openStr = `the restaurant is open for ${properties.length} days: `;
// for (let day of properties) {
//   console.log(day); //thu ,fri, sat
//   openStr += `${day},`;
// }
// console.log(openStr); //the restaurant is open for 3 days: thu,fri,sat,

//complete object with key value pair
const content = Object.entries(restaurant.openingHours);
console.log(content); //(3) [Array(2), Array(2), Array(2)] (0) ['thu', {…}] inside array of 2 we have at array[0]=thu,array[1]={open: 12, close: 22}

for (let [key, value] of content) {
  console.log(`${key}:${value}`); //thu:[object Object], fri:[object Object], sat:[object Object]
  console.log(key, ':', value.open, value.close); //thu : 12 22, fri: 11 23, sat : 0 24
}

for (let [prop, { open, close }] of content) {
  console.log(
    `We on ${prop} opens at ${open} hours and close at ${close} hours`
  );
}

//only values of enumerable property of object
const values = Object.values(restaurant.openingHours); //[{…}, {…}, {…}] 0: 0:{open: 12, close: 22} ans so on for 1 and 2 index
console.log(values);
